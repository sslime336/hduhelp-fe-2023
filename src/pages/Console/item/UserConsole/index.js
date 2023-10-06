import { useState } from "react";
import Button from "../../../../components/Button";
import Popup from "../../../../components/Popup";
import { ImageUserSetting } from "../../../../resources";
import { removeUserById } from "../../../../services/user";
import { mock } from "../../../../utils/net";
import { getCurrentTimevalStr } from "../../../../utils/time";
import Confirm from "./Confirm";
import { Main } from "./Main";
import NewUser from "./NewUser";
import UserInfo from "./UserInfo";

export default function UserConsole() {
  const [userList, setUserList] = useState([]);
  const [popup, setPopup] = useState(false);
  const [curPopComp, setCurPopComp] = useState(undefined);

  const [lastUpdateTime, setLastUpdateTime] = useState("time error");
  const [selectAll, setSelectAll] = useState(false);
  const [paging, setPaging] = useState({
    currentIdx: 0,
    itemsPerPage: 15,
  });

  const refreshUserList = () => {
    setSelectAll(false);
    setLastUpdateTime(getCurrentTimevalStr());
    mock.get("/users").then((resp) => {
      if (resp.data === null) {
        setUserList([]);
      } else {
        resp.data.map((user) => {
          user.selected = false;
          user.fuzzy = false;
          return user;
        });
        setUserList(resp.data);
        setPaging({ currentIdx: 0, itemsPerPage: 15 });
      }
    });
  };

  const createUser = () => {
    setPopup(true);
    setCurPopComp(
      <NewUser callback={refreshUserList} close={() => setPopup(false)} />,
    );
  };

  const removeUser = (removeUserCnt) => {
    setPopup(true);
    setCurPopComp(
      <Confirm
        text={
          removeUserCnt > 0
            ? `确定要删除 ${removeUserCnt} 个用户吗?`
            : `未选中任何用户`
        }
        close={() => setPopup(false)}
        next={
          removeUserCnt > 0
            ? async () => {
                for (const targetUser of userList.filter(
                  (user) => user.selected === true,
                )) {
                  await removeUserById(targetUser.id);
                }
                refreshUserList();
              }
            : null
        }
      />,
    );
  };

  const showUserInfo = (user) => {
    setPopup(true);
    setCurPopComp(<UserInfo user={user} close={() => setPopup(false)} />);
  };

  return (
    <>
      <Popup pop={popup} component={curPopComp} />
      <div className="flex w-full items-center bg-white p-2 shadow-sm">
        <div className="flex w-40">
          <img src={ImageUserSetting} alt="" className="h-8 w-8" />
          <p className="ml-2 text-lg">用户管理</p>
        </div>
        <div className="flex grow flex-row items-center self-end">
          <div className="mr-4 flex w-full justify-end">
            <div className="mr-2">
              <Button onClick={createUser}>新建</Button>
            </div>
            <Button
              onClick={() =>
                removeUser(
                  userList.filter((user) => user.selected === true).length,
                )
              }
            >
              删除
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full grow p-2">
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
  );
}
