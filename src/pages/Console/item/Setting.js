import { useEffect } from "react";
import OnDev from "../../../components/OnDev";

export default function Setting() {
  useEffect(() => {
    document.title = "设置";
  }, []);

  return (
    <>
      <OnDev info="Setting 页面" />
    </>
  );
}
