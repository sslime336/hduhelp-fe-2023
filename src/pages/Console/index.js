import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "store/auth";
import AuthStatus from "components/AuthStatus";
import Button from "components/Button";
import Popup from "components/Popup";
import { ImageSetting, ImageUserSetting } from "resources";
import About from "./item/About";
import Setting from "./item/Setting";
import UserConsole from "./item/UserConsole";
import NavItem from "./nav/NavItem";
import NavSubTitle from "./nav/NavSubTitle";

const contentList = [<UserConsole />, <Setting />, <About />];

export default function Console() {
  const navigate = useNavigate();
  const [contentIdx, setContentIdx] = useState(0);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    let selectedShell = Array(selected.length).fill(false);
    selectedShell[0] = true;
    setSelected(selectedShell);
  }, []);

  const switchContent = (idx) => {
    setContentIdx(idx);
    let selectedShell = Array(selected.length).fill(false);
    selectedShell[idx] = true;
    setSelected(selectedShell);
  };

  const [curPopComp, setCurPopComp] = useState(undefined);
  const [popup, setPopup] = useState(false);

  const showAuthInfo = () => {
    setPopup(true);
    setCurPopComp(<AuthStatus close={() => setPopup(false)} />);
  };

  const authInfo = AuthProvider.get();

  return (
    <>
      <Popup pop={popup} component={curPopComp} />
      <div className="flex h-screen w-screen flex-row bg-[#eff4f9]">
        <div className="hadow-2xl flex w-60 grow-0 flex-col border border-gray-100 bg-white hover:overflow-auto">
          <div
            className="h-32 w-full bg-zako bg-cover hover:cursor-pointer"
            onClick={() => navigate("/")}
          ></div>
          {/*侧面导航栏*/}
          <ul className="h-full w-full">
            <NavSubTitle text="管理" />
            <NavItem
              img={ImageUserSetting}
              text="用户"
              selected={selected[0]}
              onClick={() => switchContent(0)}
            />
            <NavSubTitle text="系统" />
            <NavItem
              img={ImageSetting}
              text="设置"
              selected={selected[1]}
              onClick={() => switchContent(1)}
            />
            <NavItem
              img={ImageSetting}
              text="关于"
              selected={selected[2]}
              onClick={() => switchContent(2)}
            />
          </ul>
          <div className="flex justify-between border-t p-2">
            <div className="flex grow">
              <img src={ImageUserSetting} alt="芝士头像" />
              <div className="ml-2 flex flex-col">
                <p>{authInfo.name}</p>
                <div className="rounded border border-black text-xs">
                  {authInfo.role}
                </div>
              </div>
            </div>
            <Button
              className="ml-4 border border-gray-200 text-lg font-bold text-gray-400"
              onClick={() => showAuthInfo()}
            >
              ···
            </Button>
          </div>
        </div>
        {/*主要内容*/}
        <div className="grow-1 flex w-full flex-col">
          {contentList[contentIdx]}
        </div>
      </div>
    </>
  );
}
