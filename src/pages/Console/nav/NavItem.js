export default function NavItem({img, text, onClick, selected}) {
  return (
    <>{
      selected ?
        <li className='rounded bg-gray-100 mt-1 ml-1 mr-1 h-10 flex place-items-center'
            onClick={onClick}>
          <div className='flex flex-row border-l-2 border-black'>
            <img src={img} alt='' className='w-6 h-6 ml-2 mt-auto'/>
            <p className='flex text-center ml-2'>{text}</p>
          </div>
        </li>

        :

        <li className='rounded hover:bg-gray-100 mt-1 ml-1 mr-1 h-10 flex place-items-center hover:cursor-pointer'
            onClick={onClick}>
          <div className='flex flex-row'>
            <img src={img} alt='' className='w-6 h-6 ml-2 mt-auto'/>
            <p className='flex text-center ml-2'>{text}</p>
          </div>
        </li>
    }</>
  )
}