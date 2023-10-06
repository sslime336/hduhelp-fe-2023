import { useEffect } from "react";
import OnDev from "../../../components/OnDev";
import toast from "react-hot-toast";

export default function Setting() {
  useEffect(() => {
    document.title = "设置";
    toast("页面建设中...", {
      icon: "🚧️",
    });
  }, []);

  return (
    <>
      <OnDev info="Setting 页面" />
    </>
  );
}
