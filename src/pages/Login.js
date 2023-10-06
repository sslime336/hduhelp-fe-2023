import { useLocation } from "react-router-dom";

export default function Login() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let callback = params.get("callback") || "/";

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="h-80 w-80 rounded-lg border-2 border-blue-200"></div>
    </div>
  );
}
