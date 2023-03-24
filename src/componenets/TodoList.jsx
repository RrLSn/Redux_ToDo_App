import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from "../redux/action" 


const TodoList = () => {

  const TodoLists = useSelector((state) => state.todo.list)
  // const [deleteTodo,  setDeleteTodo] = useState({})
  const dispatch = useDispatch()
  const handleDelete = () => {
    const deleteTodo = {
      todo: deleteTodo,
      isCompleted: false,
      id: Math.floor(Math.random() * 1000)
    }
    dispatch(removeTodo(deleteTodo))
  }

   return (
    <div>
      {
        TodoLists.map((tl,index) => (
          <div className={`w-[21rem] flex justify-between p-[0.6rem] border-b-2 border-b-red-900`} key={index}>
            <input type="checkbox" defaultChecked={tl.isCompleted} />
            <span className={tl.isCompleted? "linetext" : "text"}>{tl.todo}</span>
            <button className='bg-red-900 p-[0.3rem] rounded-md text-white' onClick={handleDelete}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default TodoList