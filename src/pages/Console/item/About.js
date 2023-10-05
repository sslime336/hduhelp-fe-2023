import OnDev from "../../../components/OnDev";
import {useEffect} from "react";

export default function About() {
  useEffect(() => {
    document.title = '关于'
  }, []);

  return (
    <>
      <OnDev info='About 页面'/>
    </>
  )
}