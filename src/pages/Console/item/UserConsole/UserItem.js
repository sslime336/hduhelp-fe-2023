import Button from "../../../../components/Button";
import { ImageDefaultUserAvatar } from "../../../../resources";

export function UserListItem({ index, user, onChange, showInfo }) {
  return (
    <div
      className="flex flex-row items-center border border-gray-100 hover:bg-gray-100"
      onClick={onChange}
    >
      <p className="w-12 text-center text-gray-400">{index + 1}</p>
      <input
        type="checkbox"
        className="ml-2 mt-0.5 h-4 w-4"
        checked={user.selected}
        onChange={() => {
          onChange();
          onChange();
        }}
      />
      <img
        src={ImageDefaultUserAvatar}
        alt="用户头像"
        className="ml-2 h-7 w-7"
      />
      <p className="ml-2">{user.name}</p>
      <div className="flex grow items-center justify-end p-4">
        {user.tags
          ? user.tags.map((tag, idx) => (
              <label
                key={idx}
                className="ml-1 rounded border border-gray-300 p-0.5 text-xs font-thin"
              >
                {tag}
              </label>
            ))
          : null}
        <p className="ml-2 text-center">{user.update_time}</p>
        <div className="ml-2">
          <Button
            onClick={() => {
              onChange();
              showInfo();
            }}
          >
            ···
          </Button>
        </div>
      </div>
    </div>
  );
}
