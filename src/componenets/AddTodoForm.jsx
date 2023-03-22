import React from 'react'

const AddTodoForm = () => {
  return (
    <div>
        <form className='mb-[3rem]'>
          <input type="text" className='italic w-[18rem] p-[1rem] focus:outline-none' placeholder='Add your list...' />
          <button className='py-[1rem] w-[3rem] text-white font-[700] bg-red-900 rounded-r-md'>ADD</button>
        </form>
    </div>
  )
}

export default AddTodoForm