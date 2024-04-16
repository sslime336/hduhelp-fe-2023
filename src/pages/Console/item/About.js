import { useEffect } from "react";
import OnDev from "components/OnDev";
import { Toast } from "utils/toast";

export default function About() {
  useEffect(() => {
    document.title = "关于";
    Toast.onDev("页面建设中...");
  }, []);

  return (
    <>
      <OnDev info="About 页面" />
    </>
  );
}
