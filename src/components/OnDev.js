// 页面正在建设
import {ImageOnDev} from "../resources";

export default function OnDev({info}) {
  return (
    <div className='flex flex-col items-center justify-center h-screen max-w-full'>
      <img className='w-96 h-96' src={ImageOnDev} alt='有空就做，没空摆烂...'/>
      <p className='mt-20 text-center text-blue-500 text-lg'>{info} 开发中...</p>
    </div>
  )
}