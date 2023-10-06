// 页面正在建设
import { ImageOnDev } from "../resources";

export default function OnDev({ info }) {
  return (
    <div className="flex h-screen max-w-full flex-col items-center justify-center">
      <img className="h-96 w-96" src={ImageOnDev} alt="有空就做，没空摆烂..." />
      <p className="mt-20 text-center text-lg text-blue-500">
        {info} 开发中...
      </p>
    </div>
  );
}
