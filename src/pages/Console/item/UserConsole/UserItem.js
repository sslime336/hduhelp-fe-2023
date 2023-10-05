import Button from "../../../../components/Button";
import {ImageDefaultUserAvatar} from "../../../../resources";

export function UserListItem({index, user, onChange, showInfo}) {
  return (
    <div className='flex flex-row border border-gray-100 items-center'>
      <p className='text-gray-400 w-12 text-center'>
        {index+1}
      </p>
      <input type='checkbox' className='mt-0.5 ml-2 h-4 w-4' checked={user.selected} onChange={onChange}/>
      <img src={ImageDefaultUserAvatar} alt='用户头像' className='h-7 w-7 ml-2'/>
      <p className='ml-2'>{user.name}</p>
      <div className='grow flex items-center justify-end p-4'>
        {
          user.tags ?
            (user.tags.map((tag, idx) => (
              <label key={idx} className='border p-0.5 border-gray-300 rounded font-thin text-xs ml-1'>
                {tag}
              </label>
            )))
            :
            null
        }
        <p className='ml-2 text-center'>{user.update_time}</p>
        <div className='ml-2'>
          <Button onClick={showInfo}>···</Button>
        </div>
      </div>
    </div>
  )
}