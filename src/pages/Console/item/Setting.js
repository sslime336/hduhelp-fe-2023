import { useEffect } from "react";
import OnDev from "components/OnDev";
import { Toast } from "utils/toast";

export default function Setting() {
  useEffect(() => {
    document.title = "设置";
    Toast.onDev("页面建设中...");
  }, []);

  return (
    <>
      <OnDev info="Setting 页面" />
    </>
  );
}
