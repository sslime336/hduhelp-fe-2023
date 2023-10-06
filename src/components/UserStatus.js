
export default function UserStatus({ close }) {
  // const {authStatus} = useContext(AuthCtx)

  const authStatus = { name: 'slime', role: '超级管理员' }
  return (
    <div className="bg-white w-fit h-fit p-4 rounded-lg">
      <div className="flex flex-col">
        <div>
          {authStatus.online}
        </div>
        <div>
          {authStatus.staffId}
        </div>
        <div>
          {authStatus.name}
        </div>
        <div>
          {authStatus.role}
        </div>
        Token有效期: 永久有效
      </div>
      <div className="hover:cursor-pointer" onClick={() => close()}>关闭</div>
    </div>
  )
}