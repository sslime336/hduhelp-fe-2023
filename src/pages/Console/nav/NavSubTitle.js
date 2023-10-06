export default function NavSubTitle({ text }) {
  return (
    <>
      <li className="ml-1 mr-1 mt-1 flex h-10 place-items-center rounded">
        <p className="ml-1 grid text-start text-sm text-gray-500">{text}</p>
      </li>
    </>
  );
}
