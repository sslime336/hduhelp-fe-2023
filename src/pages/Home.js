import {useEffect, useRef} from "react";
import {AudioZakoZako, ImageTakanashiHoshino} from "../resources";
import {AuthCtx} from "../context";
import {Link} from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = '杂鱼_zaKo'
  }, []);

  const zakoAudioRef = useRef(null);

  return (
    <AuthCtx.Provider value={{
      online: false,
      staffId: null,
      name: null,
      token: null,
    }}>
      <div className='flex justify-center items-center h-screen w-screen'>
        <div>
          <audio ref={zakoAudioRef} src={AudioZakoZako}>
            当前浏览器不支持 audio 标签
          </audio>
          <div
            onClick={() => zakoAudioRef.current.play()}
            className=' overflow-hidden w-96 h-96 rounded-full transition duration-300 hover:shadow-xl cursor-pointer'>
            <img src={ImageTakanashiHoshino} alt=' 星野大叔'/>
          </div>
          <div className=' flex flex-col mt-10'>
            <Link to='/console' className=' text-center transition duration-300 hover:text-blue-400'>控制台</Link>
            <Link to='/err404' className=' text-center transition duration-300 hover:text-blue-400'>404 Page Not
              found</Link>
          </div>
        </div>
      </div>
    </AuthCtx.Provider>
  )
}