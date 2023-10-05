import {useNavigate} from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate()

  const pass = () => {
    navigate('/')
  }

  return (
    <></>
  )
}