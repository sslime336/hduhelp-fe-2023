import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AudioZakoZako, ImageTakanashiHoshino } from "resources";

export default function Home() {
  useEffect(() => {
    document.title = "杂鱼_zaKo";
  }, []);

  const zakoAudioRef = useRef(null);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>
        <audio ref={zakoAudioRef} src={AudioZakoZako}>
          当前浏览器不支持 audio 标签
        </audio>
        <div
          onClick={() => zakoAudioRef.current.play()}
          className=" h-96 w-96 cursor-pointer overflow-hidden rounded-full transition duration-300 hover:shadow-xl"
        >
          <img src={ImageTakanashiHoshino} alt=" 星野大叔" />
        </div>
        <div className=" mt-10 flex flex-col">
          <Link
            to="/console"
            className=" text-center transition duration-300 hover:text-blue-400"
          >
            控制台
          </Link>
          <Link
            to="/err404"
            className=" text-center transition duration-300 hover:text-blue-400"
          >
            404 Page Not found
          </Link>
        </div>
      </div>
    </div>
  );
}
