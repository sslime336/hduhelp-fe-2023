export default function NavSubTitle({ text }) {
  return (
    <>
      <li className='rounded mt-1 ml-1 mr-1 h-10 flex place-items-center'>
        <p className='grid text-start text-sm text-gray-500 ml-1'>{text}</p>
      </li>
    </>
  )
}
