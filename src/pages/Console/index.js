import NavItem from "./nav/NavItem";
import NavSubTitle from "./nav/NavSubTitle";
import {useNavigate} from "react-router-dom";
import {ImageSetting, ImageUserSetting} from "../../resources";
import {useEffect, useState} from "react";
import UserConsole from "./item/UserConsole";
import Setting from "./item/Setting";
import About from "./item/About";
import {PopupCtx} from "../../context";
import Button from "../../components/Button";

const contentList = [
  <UserConsole/>,
  <Setting/>,
  <About/>,
]

export default function Console() {
  const navigate = useNavigate()
  const [contentIdx, setContentIdx] = useState(0)
  const [selected, setSelected] = useState([])
  const [popup, setPopup] = useState(false)

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

  return (
    <>
      <PopupCtx.Provider value={{popup, setPopup}}>
        <div className='flex flex-row h-screen w-screen bg-[#eff4f9]'>
          <div className='grow-0 flex flex-col bg-white w-60 hadow-2xl border border-gray-100 hover:overflow-auto'>
            <div className='w-full h-32 bg-cover bg-zako hover:cursor-pointer'
                 onClick={() => navigate(('/'))}></div>
            {/*侧面导航栏*/}
            <ul className='w-full h-full'>
              <NavSubTitle text='管理'/>
              <NavItem img={ImageUserSetting} text='用户' selected={selected[0]} onClick={() => switchContent(0)}/>
              <NavSubTitle text='系统'/>
              <NavItem img={ImageSetting} text='设置' selected={selected[1]} onClick={() => switchContent(1)}/>
              <NavItem img={ImageSetting} text='关于' selected={selected[2]} onClick={() => switchContent(2)}/>
            </ul>
            {/*TODO: 更换成实际的当前用户名*/}
            <div className='flex justify-between p-2 border-t'>
              <div className='flex grow'>
                <img src={ImageUserSetting} alt='芝士头像'/>
                <div className='flex flex-col ml-2'>
                  <p>slime</p>
                  <div className='border border-black text-xs rounded'>
                    Super 管理员
                  </div>
                </div>
              </div>
              <Button className='ml-4 text-lg font-bold border border-gray-200 text-gray-400'>···</Button>
            </div>
          </div>
          {/*主要内容*/}
          <div className='grow-1 flex flex-col w-full'>
            {contentList[contentIdx]}
          </div>
        </div>
        {/*<Login/>*/}
      </PopupCtx.Provider>
    </>
  )
}
