const BuddyButton = ({ content, onClick }) => {
  return (
    <button className="bg-white hover:bg-gray-100 text-black border py-1 px-4 rounded text-center" onClick={onClick}>
      {content}
    </button>
  )
}
export default BuddyButton