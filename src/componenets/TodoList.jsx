import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleComplete } from "../redux/action" 


const TodoList = () => {

  const TodoLists = useSelector((state) => state.todo.list)
  console.log(TodoLists)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeTodo(id))
  }

  const handleComplete = (id) => {
    dispatch(toggleComplete(id))
  }

   return (
    <div>
      {
        TodoLists.map((tl,index) => (
          <div className={`w-[21rem] flex justify-between p-[0.6rem] border-b-2 border-b-red-900`} key={index}>
            <div className='w-[15rem] flex gap-[4rem] cursor-pointer' onClick={() => handleComplete(tl.id)}>
            <input type="checkbox" checked={tl.isCompleted} />
            <span className={tl.isCompleted? "linetext" : "text"}>{tl.todo}</span>
            </div>

            <button className='bg-red-900 p-[0.3rem] rounded-md text-white' onClick={() => handleDelete(tl.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default TodoList