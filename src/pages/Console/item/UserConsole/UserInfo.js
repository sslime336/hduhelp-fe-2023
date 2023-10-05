import {ImageDefaultUserAvatar} from "../../../../resources";
import Button from "../../../../components/Button";

export default function UserInfo({user, close}) {
  return (
    <div className='w-96 h-fit bg-white shadow-xl rounded-lg'>
      <div className='p-4 h-full w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img className='h-10 w-10' src={ImageDefaultUserAvatar} alt='avatar' />
            <div className='flex flex-col ml-2'>
              {user.name}
              <div className='flex'>
                {
                  user.tags ?
                    (
                      user.tags.map((tag, idx) => (
                          <label key={idx}
                                 className='flex p-1 items-center justify-center border border-gray-300 rounded h-5 font-thin text-xs ml-1'>
                            <p className='flex'>
                              {tag}
                            </p>
                            <div
                              className='flex justify-center items-center ml-1 mr-0.5 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer w-4 h-4 rounded-full text-center'>
                              <p className='flex justify-center items-center mb-1 mt-0.5'>×</p>
                            </div>
                          </label>
                        )
                      ))
                    :
                    null
                }
                <div
                  className='flex justify-center items-center ml-1 mt-0.5 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer w-4 h-4 rounded-full text-center'
                  onClick={() => {

                  }}>
                  <p className='flex justify-center items-center mb-1 font-thin'>+</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex'>
            <Button onClick={close}>关闭</Button>
          </div>
        </div>
        <div className='flex flex-col mt-2'>
          <div className='flex'>
            StaffId: {user.staff_id}
          </div>
          <div className='flex'>
            Phone: {user.phone}
          </div>
          <div className='flex'>
            E-mail: {user.email}
          </div>
        </div>
      </div>
    </div>
  )
}