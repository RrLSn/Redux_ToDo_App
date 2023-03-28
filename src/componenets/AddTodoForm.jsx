import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/action'

const AddTodoForm = () => {
  const [todo, setTodo] = useState("")
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = {
      todo: todo,
      isCompleted: false,
      id: Math.floor(Math.random() * 1000)
    }
    dispatch(addTodo(newTodos))
    setTodo("")
  }
  
  return (
    <div>
      <form className='mb-[3rem]' onSubmit={handleSubmit}>
        <input type="text" className='italic w-[18rem] p-[1rem] focus:outline-none' placeholder='Add your list...' value={todo} onChange={(e) => handleChange(e)} required />
        <button className='py-[1rem] w-[3rem] text-white font-[700] bg-red-900 rounded-r-md'>ADD</button>
      </form>
    </div>
  )
}

export default AddTodoForm
