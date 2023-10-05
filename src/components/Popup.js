export default function Popup({pop, component}) {
  return (
    pop ?
      <div className='fixed top-0 left-0 h-screen w-screen'>
        <div className='z-0 fixed bg-black opacity-20 h-full w-full'/>
        <div className='z-1 fixed flex justify-center items-center h-full w-full'>
          {component}
        </div>
      </div>
      :
      <></>
  )
}