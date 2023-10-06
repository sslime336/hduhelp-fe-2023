import { AuthProvider } from "../store/auth";
import Button from "./Button";
import { ImageTakanashiHoshino } from "../resources";

export default function AuthStatus({ close }) {
  let authInfo = AuthProvider.get();
  return (
    <div className="h-fit w-fit rounded-lg bg-white p-4">
      <div className="flex items-center justify-center">
        <img
          className="h-16 w-16 rounded-full hover:shadow"
          src={ImageTakanashiHoshino}
          alt=""
        />
      </div>
      <div className="mt-2 flex">
        <div className="flex flex-col items-end">
          <div>登录状态:</div>
          <div>学工号:</div>
          <div>昵称:</div>
          <div>身份:</div>
          <div>Token有效期:</div>
        </div>
        <div className="ml-4 flex flex-col">
          <div>{authInfo.online ? "在线" : "离线"}</div>
          <div>{authInfo.staffId || "Unknown"}</div>
          <div>{authInfo.name || "Unknown"}</div>
          <div>{authInfo.role || "Unknown"}</div>
          永久有效
        </div>
      </div>
      <div className="mt-3 flex justify-center">
        <Button onClick={() => close()}>关闭</Button>
      </div>
    </div>
  );
}
