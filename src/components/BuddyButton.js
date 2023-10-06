const BuddyButton = ({ content, onClick }) => {
  return (
    <button
      className="rounded border bg-white px-4 py-1 text-center text-black hover:bg-gray-100"
      onClick={onClick}
    >
      {content}
    </button>
  );
};
export default BuddyButton;
