
const TodoList = () => {
 
  return (
    <div>
        <div className='w-[21rem] flex justify-between p-[0.6rem] border-b-2 border-b-red-900'>
          <input type="checkbox" />
          <span></span>
          <button className='bg-red-900 p-[0.3rem] rounded-md text-white'>Delete</button>
        </div>
    </div>
  )
}

export default TodoList