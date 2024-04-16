import { useRef, useState } from "react";
import Button from "components/Button";
import { Input } from "components/Input";
import { ImageDefaultUserAvatar } from "resources";
import { createUser } from "services/user";
import { isEmail, isPhoneNumber } from "utils/verify";
import { Toast } from "utils/toast";

export default function NewUser({ callback, close }) {
  const newUserRef = useRef({
    staff_id: "",
    name: "",
    phone: "",
    email: "",
  });

  const [inputError, setInputError] = useState([
    { id: "学号", once: false, err: false },
    { id: "姓名", once: false, err: false },
    { id: "手机号", once: false, err: false },
    { id: "电子邮箱", once: false, err: false },
  ]);
  const updateInputError = (index, err, msg) => {
    let shell = [...inputError];
    shell[index].once = true;
    shell[index].err = err;
    shell[index].errmsg = msg;
    setInputError(shell);
  };

  return (
    <div className="flex h-fit w-96 flex-col rounded-lg bg-white shadow-xl">
      <div className="mt-4 flex h-16 justify-center">
        {/*TODO: 头像上传*/}
        <img className="h-full" src={ImageDefaultUserAvatar} alt="upload" />
      </div>
      <div className="mt-2 flex justify-center">
        <div className="flex flex-col items-end">
          <p className="mt-4 flex h-8 text-center">
            学号<span className="text-red-600">*</span>:
          </p>
          <p className="mt-4 flex h-8 text-center">
            姓名<span className="text-red-600">*</span>:
          </p>
          <p className="mt-4 flex h-8 text-center">
            手机号<span className="text-red-600">*</span>:
          </p>
          <p className="mt-4 flex h-8 text-center">
            Email<span className="text-red-600">*</span>:
          </p>
        </div>
        <div className="flex flex-col">
          <div className="mt-4 flex h-8 justify-center">
            <Input
              placeholder="8位学号"
              error={inputError[0]}
              onChange={(e) => {
                let value = e.target.value;
                newUserRef.current.staff_id = value;
                let staff_id = newUserRef.current.staff_id;
                if (value === "") {
                  updateInputError(0, true, "学号不能为空");
                } else if (staff_id.length !== 8) {
                  updateInputError(0, true, "请输入8位学号");
                } else {
                  updateInputError(0, false, "");
                }
              }}
            />
          </div>

          <div className="mt-4 flex h-8 justify-center">
            <Input
              placeholder="姓名"
              error={inputError[1]}
              onChange={(e) => {
                let value = e.target.value;
                newUserRef.current.name = value;
                if (value === "") {
                  updateInputError(1, true, "姓名不能为空");
                } else {
                  updateInputError(1, false, "");
                }
              }}
            />
          </div>

          <div className="mt-4 flex h-8 justify-center">
            <Input
              placeholder="11位手机号"
              error={inputError[2]}
              onChange={(e) => {
                let value = e.target.value;
                newUserRef.current.phone = value;
                if (value === "") {
                  updateInputError(2, true, "手机号不能为空");
                } else if (!isPhoneNumber(value)) {
                  updateInputError(2, true, "不是有效的手机号");
                } else {
                  updateInputError(2, false, "");
                }
              }}
            />
          </div>

          <div className="mt-4 flex h-8 justify-center">
            <Input
              placeholder="电子邮箱"
              error={inputError[3]}
              onChange={(e) => {
                let value = e.target.value;
                newUserRef.current.email = value;
                if (value === "") {
                  updateInputError(3, true, "email不能为空");
                } else if (!isEmail(value)) {
                  updateInputError(3, true, "请输入有效的email");
                } else {
                  updateInputError(3, false, "");
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="mb-4 mt-8 flex items-center justify-center">
        <div className="flex">
          <Button
            onClick={async () => {
              if (inputError.findIndex((err) => !err.once || err.err) === -1) {
                await createUser(newUserRef.current);
                callback();
                close();
                Toast.success("新用户创建成功!");
              } else {
                inputError.forEach((err, idx) => {
                  if (!err.once || err.err) {
                    updateInputError(idx, true, `请填写正确的${err.id}`);
                  }
                });
                Toast.error("录入的用户信息不合法");
              }
            }}
          >
            确定
          </Button>
          <div className="ml-1">
            <Button onClick={close}>取消</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
