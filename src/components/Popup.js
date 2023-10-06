export default function Popup({ pop, component }) {
  return pop ? (
    <div className="fixed left-0 top-0 h-screen w-screen">
      <div className="fixed z-0 h-full w-full bg-black opacity-20" />
      <div className="z-1 fixed flex h-full w-full items-center justify-center">
        {component}
      </div>
    </div>
  ) : (
    <></>
  );
}
