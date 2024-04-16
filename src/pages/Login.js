import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "components/Input";
import { ImageZako } from "../resources";
import Button from "components/Button";
import { AuthProvider } from "store/auth";

export default function Login() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let callback = params.get("callback") || "/";
  let navigate = useNavigate();
  const authPass = () => {
    navigate(callback);
  };

  let usernameRef = useRef("");
  let passwordRef = useRef("");

  let [loginErr, setLoginErr] = useState([
    { id: "用户名", once: false, err: false },
    { id: "密码", once: false, err: false },
  ]);

  const updateInputError = (index, err, msg) => {
    let shell = [...loginErr];
    shell[index].once = true;
    shell[index].err = err;
    shell[index].errmsg = msg;
    setLoginErr(shell);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center sm:bg-gray-100">
      <div className="flex h-fit w-96 flex-col rounded-lg bg-white p-4 sm:shadow-xl">
        <img
          onClick={() => navigate("/")}
          className="h-fit w-fit hover:cursor-pointer"
          src={ImageZako}
          alt="zaKo"
        />
        <div className="mt-2 flex justify-center">
          <div className="flex flex-col items-end">
            <p className="mt-4 flex h-8 text-center">
              用户名<span className="text-red-600">*</span>:
            </p>
            <p className="mt-4 flex h-8 text-center">
              密码<span className="text-red-600">*</span>:
            </p>
          </div>
          <div className="flex flex-col">
            <div className="mt-4 flex h-8 justify-center">
              <Input
                placeholder="username"
                error={loginErr[0]}
                onChange={(e) => {
                  let value = e.target.value;
                  usernameRef.current = value;
                  if (value === "") {
                    updateInputError(0, true, "用户名不能为空");
                  } else {
                    updateInputError(0, false, "");
                  }
                }}
              />
            </div>
            <div className="mt-4 flex h-8 justify-center">
              <Input
                type="password"
                placeholder="password"
                error={loginErr[1]}
                onChange={(e) => {
                  let value = e.target.value;
                  passwordRef.current = value;
                  if (value === "") {
                    updateInputError(1, true, "密码不能为空");
                    return;
                  } else if (value.length < 6) {
                    updateInputError(1, true, "密码不能少于六位");
                    return;
                  }
                  updateInputError(1, false, "");
                }}
              />
            </div>
          </div>
        </div>

        <div className="mb-4 mt-8 flex  items-center justify-center">
          <div className="flex">
            <Button
              onClick={async () => {
                let username = usernameRef.current;
                let password = passwordRef.current;
                if (loginErr.findIndex((err) => !err.once || err.err) !== -1) {
                  loginErr.forEach((err, idx) => {
                    if (!err.once || err.err) {
                      updateInputError(idx, true, `请填写正确的${err.id}`);
                    }
                  });
                  return;
                }
                try {
                  let res = await AuthProvider.login({ username, password });
                  if (res === true) {
                    authPass();
                  } else {
                    updateInputError(0, true, "");
                    updateInputError(1, true, "用户名或密码错误");
                  }
                } catch (e) {
                  console.error("fatal error");
                  if (e.response) {
                    let resp = e.response;
                    console.warn("resp.data: " + resp.data);
                    console.warn("resp.status: " + resp.status);
                  }
                }
              }}
            >
              登录
            </Button>
            <div className="ml-2">
              <Button onClick={() => navigate("/")}>返回主页</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
