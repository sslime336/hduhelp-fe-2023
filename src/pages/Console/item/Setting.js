import OnDev from "../../../components/OnDev";
import {useEffect} from "react";

export default function Setting() {
  useEffect(() => {
    document.title = '设置'
  }, []);

  return (
    <>
      <OnDev info="Setting 页面"/>
    </>
  )
}
