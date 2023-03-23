import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { DELETETODO } from "../redux/action"
const TodoList = () => {
  const todos = useSelector(state => state.todos)
 
  return (
    <div>
        <div className='w-[21rem] flex justify-between p-[0.6rem] border-b-2 border-b-red-900'>
          <input type="checkbox" />
          <span>{todos}</span>
          <button className='bg-red-900 p-[0.3rem] rounded-md text-white'>Delete</button>
        </div>
    </div>
  )
}

export default TodoList