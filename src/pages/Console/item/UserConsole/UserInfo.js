import Button from "../../../../components/Button";
import { ImageDefaultUserAvatar } from "../../../../resources";
import { updateUser } from "../../../../services/user";
import { useEffect, useRef, useState } from "react";

export default function UserInfo({ user, close, refreshUserList }) {
  const [curUser, setCurUser] = useState({ ...user });

  const [showNewTag, setShowNewTag] = useState(false);

  const newTagRef = useRef(null);
  const newNameRef = useRef(null);
  const newStaffIdRef = useRef(null);
  const newPhoneRef = useRef(null);
  const newEmailRef = useRef(null);

  useEffect(() => {
    if (showNewTag) newTagRef.current.focus();
  }, [showNewTag]);

  return (
    <div className="h-fit w-96 rounded-lg bg-white shadow-xl">
      <div className="flex flex-col">
        <div className="flex items-center justify-between pl-4 pr-4 pt-4">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <img
                className="h-10 w-10"
                src={ImageDefaultUserAvatar}
                alt="avatar"
              />
              <input
                ref={newNameRef}
                defaultValue={curUser.name}
                className="mt-2 flex w-28 border-b pl-1 text-center outline-none focus:border-gray-700"
                onBlur={() => {
                  let updatedUser = { ...curUser };
                  updatedUser.name = newNameRef.current.value;
                  setCurUser(updatedUser);
                }}
              />
            </div>
            <div className="ml-2 flex flex-col">
              <div className="flex flex-wrap">
                {curUser.tags
                  ? curUser.tags.map((tag, idx) => (
                      <label
                        key={idx}
                        className="ml-1 mt-1 flex h-5 items-center justify-center rounded border border-gray-300 p-1 text-xs font-thin"
                      >
                        <p className="flex">{tag}</p>
                        <div
                          className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-100 text-center hover:cursor-pointer hover:bg-gray-200"
                          onClick={() => {
                            let updatedUser = { ...curUser };
                            updatedUser.tags = updatedUser.tags.filter(
                              (v) => v !== tag,
                            );
                            setCurUser(updatedUser);
                          }}
                        >
                          <p className="mb-1 mt-0.5 flex items-center justify-center">
                            ×
                          </p>
                        </div>
                      </label>
                    ))
                  : null}
                <input
                  ref={newTagRef}
                  className={`${
                    showNewTag ? "" : "hidden"
                  } ml-1 mt-1 flex h-5 w-16 items-center justify-center rounded border border-gray-300 p-1 text-xs font-thin outline-none`}
                  onBlur={() => {
                    setShowNewTag(false);
                    let curTag = newTagRef.current.value;
                    if (
                      curTag === "" ||
                      (curUser.tags
                        ? curUser.tags.find((tag) => tag === curTag)
                        : false)
                    ) {
                      newTagRef.current.value = "";
                      return;
                    }
                    let updatedUser = { ...curUser };
                    if (!updatedUser.tags) {
                      updatedUser.tags = [curTag];
                    } else {
                      updatedUser.tags.push(curTag);
                    }
                    newTagRef.current.value = "";
                    setCurUser(updatedUser);
                  }}
                ></input>
                <div
                  className="ml-1 mt-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gray-100 text-center hover:cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setShowNewTag(true);
                  }}
                >
                  <p className="mb-1 flex items-center justify-center font-thin">
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-between pb-4 pl-4 pr-4 pt-2">
          <div className="mt-2 flex flex-col">
            <div className="mt-2 flex">
              <span>StaffId:</span>
              <input
                ref={newStaffIdRef}
                className="ml-2 border-b pl-1 text-center outline-none focus:border-gray-700"
                defaultValue={curUser.staff_id}
                onBlur={() => {
                  let updatedUser = { ...curUser };
                  updatedUser.staff_id = newStaffIdRef.current.value;
                  setCurUser(updatedUser);
                }}
              />
            </div>
            <div className="mt-2 flex">
              <span>Phone:</span>
              <input
                ref={newPhoneRef}
                className="ml-2 border-b pl-1 text-center outline-none focus:border-gray-700"
                onBlur={() => {
                  let updatedUser = { ...curUser };
                  updatedUser.phone = newPhoneRef.current.value;
                  setCurUser(updatedUser);
                }}
                defaultValue={curUser.phone}
              />
            </div>
            <div className="mt-2 flex">
              <span>E-mail:</span>
              <input
                ref={newEmailRef}
                className="ml-2 border-b pl-1 text-center outline-none focus:border-gray-700"
                defaultValue={curUser.email}
                onBlur={() => {
                  let updatedUser = { ...curUser };
                  updatedUser.email = newEmailRef.current.value;
                  setCurUser(updatedUser);
                }}
              />
            </div>
          </div>
          <div className="flex w-fit grow flex-col items-end justify-end">
            <div className="flex w-fit">
              <Button
                onClick={async () => {
                  if (JSON.stringify(curUser) === JSON.stringify(user)) {
                    close();
                    return;
                  }
                  await updateUser(curUser);
                  refreshUserList();
                  close();
                }}
              >
                确定
              </Button>
            </div>
            <div className="mt-2 flex w-fit">
              <Button onClick={close}>关闭</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
