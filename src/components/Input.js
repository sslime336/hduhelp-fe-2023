export default function Input({ placeholder, onChange, error }) {
  return (
    <div className="relative">
      {error.once && error.err ? (
        <>
          <div className="ml-2">
            <input
              type="text"
              onChange={onChange}
              className="w-full rounded-lg border border-red-600 p-1 text-sm text-gray-900"
              placeholder={placeholder}
            />
          </div>
          <p className="absolute right-0 top-8 text-xs text-red-600">
            {error.errmsg}
          </p>
        </>
      ) : (
        <div className="ml-2">
          <input
            type="text"
            onChange={onChange}
            className="w-full rounded-lg border p-1 text-sm text-gray-900"
            placeholder={placeholder}
          />
        </div>
      )}
    </div>
  );
}
