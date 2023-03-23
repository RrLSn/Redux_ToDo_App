import React, { useState } from 'react'
import { addTodoList } from "../redux/action"
import { useDispatch} from 'react-redux'

const AddTodoForm = () => {

  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(0)

  const handleSubmit = (e) => {
    setTodo(e.target.value)
  }

  const todoSubmitHandler = (e) => {
    e.preventDefault()
    if(todo !== "") {
      dispatch(addTodoList(counter, todo))
      setCounter(counter + 1)
      setTodo("")
    }
  }


  return (
    <div>
        <form className='mb-[3rem]'>
          <input type="text" className='italic w-[18rem] p-[1rem] focus:outline-none' placeholder='Add your list...' value={todo} onChange={(e) => handleSubmit(e)} />
          <button onClick={todoSubmitHandler} className='py-[1rem] w-[3rem] text-white font-[700] bg-red-900 rounded-r-md'>ADD</button>
        </form>
    </div>
  )
}

export default AddTodoForm