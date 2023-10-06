import Button from "../../../../components/Button";
import { ImageDefaultUserAvatar } from "../../../../resources";
import { updateUser } from "../../../../services/user";
import { useRef } from "react";

export default function UserInfo({ user, close, refreshUserList }) {
  const newUser = useRef({ ...user });
  return (
    <div className="h-fit w-96 rounded-lg bg-white shadow-xl">
      <div className="h-full w-full p-4">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-10 w-10"
              src={ImageDefaultUserAvatar}
              alt="avatar"
            />
            <div className="ml-2 flex flex-col">
              {user.name}
              <div className="flex">
                {user.tags
                  ? user.tags.map((tag, idx) => (
                      <label
                        key={idx}
                        className="ml-1 flex h-5 items-center justify-center rounded border border-gray-300 p-1 text-xs font-thin"
                      >
                        <p className="flex">{tag}</p>
                        <div
                          className="ml-1 mr-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gray-100 text-center hover:cursor-pointer hover:bg-gray-200"
                          onClick={async () => {
                            let newUser = { ...user };
                            newUser.tags = newUser.tags.filter(
                              (v) => v !== tag,
                            );
                            //TODO: 删除并动态更新
                            await updateUser(user);
                          }}
                        >
                          <p className="mb-1 mt-0.5 flex items-center justify-center">
                            ×
                          </p>
                        </div>
                      </label>
                    ))
                  : null}
                <div
                  className="ml-1 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gray-100 text-center hover:cursor-pointer hover:bg-gray-200"
                  onClick={() => {}}
                >
                  <p className="mb-1 flex items-center justify-center font-thin">
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-3 top-2 flex-col">
            <Button onClick={close}>关闭</Button>
            <div className="mt-2">
              <Button
                onClick={async () => {
                  await updateUser(newUser);
                  refreshUserList();
                  close();
                }}
              >
                确定
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          <div className="mt-2 flex">
            <span>StaffId:</span>
            <input className="ml-2 rounded pl-1" defaultValue={user.staff_id} />
          </div>
          <div className="mt-2 flex">
            <span>Phone:</span>
            <input className="ml-2 rounded pl-1" defaultValue={user.phone} />
          </div>
          <div className="mt-2 flex">
            <span>E-mail:</span>
            <input className="ml-2 rounded pl-1" defaultValue={user.email} />
          </div>
        </div>
      </div>
    </div>
  );
}
