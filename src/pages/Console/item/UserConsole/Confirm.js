import Button from "components/Button";

export default function Confirm({ text, close, next }) {
  return (
    <div className="flex h-fit w-96 flex-col items-center rounded-lg bg-white p-4 shadow-xl">
      {text}
      <div className="mt-4 flex w-fit">
        {next === null ? null : (
          <Button
            onClick={() => {
              next();
              close();
            }}
          >
            确定
          </Button>
        )}
        <div className="ml-2">
          <Button onClick={close}>关闭</Button>
        </div>
      </div>
    </div>
  );
}
