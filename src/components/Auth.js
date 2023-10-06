import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthCtx} from "../context";

export default function Auth({children}) {
  // const navigate = useNavigate()
  // const auth = useContext(AuthCtx)
  //
  // useEffect(() => {
  //   if (auth.authStatus.online === !false) {
  //     navigate('/login')
  //   }
  // }, []);


  return (
    <>{children}</>
  )
}