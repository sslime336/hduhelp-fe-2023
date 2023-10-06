import { useEffect } from "react";
import OnDev from "../../../components/OnDev";
import toast from "react-hot-toast";

export default function About() {
  useEffect(() => {
    document.title = "关于";
    toast("页面建设中...", {
      icon: "🚧️",
    });
  }, []);

  return (
    <>
      <OnDev info="About 页面" />
    </>
  );
}
