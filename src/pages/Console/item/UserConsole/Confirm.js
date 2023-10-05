import Button from "../../../../components/Button";

export default function Confirm({text, close, next}) {
  return (
    <div className='flex flex-col w-96 h-fit bg-white shadow-xl rounded-lg p-4 items-center'>
      {text}
      <div className='flex w-fit mt-4'>
        {
          next === null ? null :
            <Button onClick={() => {
              next()
              close()
            }}>确定</Button>
        }
        <div className='ml-2'>
          <Button onClick={close}>关闭</Button>
        </div>
      </div>
    </div>
  )
}