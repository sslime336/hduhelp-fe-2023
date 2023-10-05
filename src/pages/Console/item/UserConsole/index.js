import {ImageUserSetting} from "../../../../resources";
import Button from "../../../../components/Button";
import {useContext, useState} from "react";
import Popup from "../../../../components/Popup";
import {PopupCtx} from "../../../../context";
import NewUser from "./NewUser";
import UserInfo from "./UserInfo";
import Confirm from "./Confirm";
import {Main} from "./Main";
import {removeUserById} from "../../../../services/user";
import {getCurrentTimevalStr} from "../../../../utils/time";
import {mock} from "../../../../utils/net";

export default function UserConsole() {
  const [userList, setUserList] = useState([])
  const {popup, setPopup} = useContext(PopupCtx)
  const [curPopComp, setCurPopComp] = useState(undefined)

  const [lastUpdateTime, setLastUpdateTime] = useState('time error')
  const [selectAll, setSelectAll] = useState(false)
  const [paging, setPaging] = useState({
    currentIdx: 0,
    itemsPerPage: 15,
  })

  const refreshUserList = () => {
    setSelectAll(false)
    setLastUpdateTime(getCurrentTimevalStr())
    mock.get('/users').then(resp => {
      if (resp.data === null) {
        setUserList([])
      } else {
        resp.data.map(user => {
          user.selected = false
          user.fuzzy = false
          return user
        })
        setUserList(resp.data)
        setPaging({currentIdx: 0, itemsPerPage: 15})
      }
    })
  }

  const createUser = () => {
    setPopup(true)
    setCurPopComp(<NewUser callback={refreshUserList} close={() => setPopup(false)}/>)
  }

  const removeUser = (removeUserCnt) => {
    setPopup(true)
    setCurPopComp(
      <Confirm
        text={removeUserCnt > 0 ? `确定要删除 ${removeUserCnt} 个用户吗?` : `未选中任何用户`}
        close={() => setPopup(false)}
        next={removeUserCnt > 0 ? async () => {
            for (const targetUser of userList.filter(user => user.selected === true)) {
              await removeUserById(targetUser.id);
            }
            refreshUserList()
          } :
          null
        }
      />
    )
  }

  const showUserInfo = (user) => {
    setPopup(true)
    setCurPopComp(<UserInfo user={user} close={() => setPopup(false)}/>)
  }

  return (
    <>
      <Popup pop={popup} component={curPopComp}/>
      <div className='flex items-center p-2 bg-white w-full shadow-sm'>
        <div className='flex w-40'>
          <img src={ImageUserSetting} alt='' className='w-8 h-8'/>
          <p className='text-lg ml-2'>用户管理</p>
        </div>
        <div className='grow flex flex-row items-center self-end'>
          <div className='flex w-full justify-end mr-4'>
            <div className='mr-2'>
              <Button onClick={createUser}>新建</Button>
            </div>
            <Button onClick={() => removeUser(userList.filter(user => user.selected === true).length)}>删除</Button>
          < /div>
        </div>
      </div>
      <div className='grow w-full p-2'>
        <Main
          userList={userList}
          setUserList={setUserList}
          showUserInfo={showUserInfo}
          selectAll={selectAll}
          setSelectAll={setSelectAll}
          lastUpdateTime={lastUpdateTime}
          refreshUserList={refreshUserList}
          paging={paging}
          setPaging={setPaging}
        />
      </div>
    </>
  )
}