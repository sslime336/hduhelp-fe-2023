import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Popup from "../../components/Popup";
import UserStatus from "../../components/UserStatus";
import { ImageSetting, ImageUserSetting } from "../../resources";
import About from "./item/About";
import Setting from "./item/Setting";
import UserConsole from "./item/UserConsole";
import NavItem from "./nav/NavItem";
import NavSubTitle from "./nav/NavSubTitle";

const contentList = [
  <UserConsole />,
  <Setting />,
  <About />,
]

export default function Console() {
  const navigate = useNavigate()
  const [contentIdx, setContentIdx] = useState(0)
  const [selected, setSelected] = useState([])

  // const {authStatus} = useContext(AuthCtx)
  const authStatus = {name: 'slime', role: '超级管理员'}

  useEffect(() => {
    let selectedShell = Array(selected.length).fill(false)
    selectedShell[0] = true
    setSelected(selectedShell)
  }, []);

  const switchContent = (idx) => {
    setContentIdx(idx)
    let selectedShell = Array(selected.length).fill(false)
    selectedShell[idx] = true
    setSelected(selectedShell)
  }

  const [curPopComp, setCurPopComp] = useState(undefined)
  const [popup, setPopup] = useState(false)

  const showAuthInfo = () => {
    setPopup(true)
    setCurPopComp(<UserStatus close={() => setPopup(false)} />)
  }

  return (
    <>
      <Popup pop={popup} component={curPopComp} />
      <div className='flex flex-row h-screen w-screen bg-[#eff4f9]'>
        <div className='grow-0 flex flex-col bg-white w-60 hadow-2xl border border-gray-100 hover:overflow-auto'>
          <div className='w-full h-32 bg-cover bg-zako hover:cursor-pointer'
               onClick={() => navigate(('/'))}></div>
          {/*侧面导航栏*/}
          <ul className='w-full h-full'>
            <NavSubTitle text='管理' />
            <NavItem img={ImageUserSetting} text='用户' selected={selected[0]} onClick={() => switchContent(0)} />
            <NavSubTitle text='系统' />
            <NavItem img={ImageSetting} text='设置' selected={selected[1]} onClick={() => switchContent(1)} />
            <NavItem img={ImageSetting} text='关于' selected={selected[2]} onClick={() => switchContent(2)} />
          </ul>
          <div className='flex justify-between p-2 border-t'>
            <div className='flex grow'>
              <img src={ImageUserSetting} alt='芝士头像' />
              <div className='flex flex-col ml-2'>
                <p>{authStatus.name}</p>
                <div className='border border-black text-xs rounded'>
                  {authStatus.role}
                </div>
              </div>
            </div>
            <Button className='ml-4 text-lg font-bold border border-gray-200 text-gray-400'
                    onClick={() => showAuthInfo()}>···</Button>
          </div>
        </div>
        {/*主要内容*/}
        <div className='grow-1 flex flex-col w-full'>
          {contentList[contentIdx]}
        </div>
      </div>
    </>
  )
}
