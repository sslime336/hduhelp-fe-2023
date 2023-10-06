export default function Input({ placeholder, onChange, error }) {
  return (
    <div className='relative'>
      {
        error.once && error.err ? (
          <>
            <div className='ml-2'>
              <input type="text"
                onChange={onChange}
                className="border border-red-600 text-gray-900 text-sm rounded-lg w-full p-1"
                placeholder={placeholder} />
            </div>
            <p className='absolute top-8 right-0 text-xs text-red-600'>{error.errmsg}</p>
          </>
        )
          :
          <div className='ml-2'>
            <input type="text"
              onChange={onChange}
              className="border text-gray-900 text-sm rounded-lg w-full p-1"
              placeholder={placeholder} />
          </div>
      }
    </div>
  )
}