import { useEffect } from "react";
import OnDev from "../../../components/OnDev";

export default function About() {
  useEffect(() => {
    document.title = '关于'
  }, []);

  return (
    <>
      <OnDev info='About 页面' />
    </>
  )
}