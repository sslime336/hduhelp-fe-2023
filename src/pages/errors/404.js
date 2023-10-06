import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImageNotFound } from "../../resources";

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = '粗错哩 QwQ'
  }, []);

  return (
    <div className='grid h-screen w-screen place-content-center'>
      <img src={ImageNotFound} alt='' />
      <button
        onClick={() => navigate(-1)}
        className='border-2 border-gray-100 transition duration-300 hover:bg-blue-200 rounded mt-10 w-40 m-auto'>

        Go Back
      </button>
    </div>
  )
}