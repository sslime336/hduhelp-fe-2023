export default function NavItem({ img, text, onClick, selected }) {
  return (
    <>
      {selected ? (
        <li
          className="ml-1 mr-1 mt-1 flex h-10 place-items-center rounded bg-gray-100"
          onClick={onClick}
        >
          <div className="flex flex-row border-l-2 border-black">
            <img src={img} alt="" className="ml-2 mt-auto h-6 w-6" />
            <p className="ml-2 flex text-center">{text}</p>
          </div>
        </li>
      ) : (
        <li
          className="ml-1 mr-1 mt-1 flex h-10 place-items-center rounded hover:cursor-pointer hover:bg-gray-100"
          onClick={onClick}
        >
          <div className="flex flex-row">
            <img src={img} alt="" className="ml-2 mt-auto h-6 w-6" />
            <p className="ml-2 flex text-center">{text}</p>
          </div>
        </li>
      )}
    </>
  );
}
