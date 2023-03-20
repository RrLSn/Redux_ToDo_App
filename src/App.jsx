import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App text-center p-[2rem] grid place-items-center">
      <h1 className='text-6xl font-[700] mb-[4rem] underline text-red-900'>My To_do App</h1>

      <div className='w-[25rem] min-h-[35rem] bg-[pink] p-[2rem] rounded-lg'>
        <form className='mb-[3rem]'>
          <input type="text" className='italic w-[18rem] p-[1rem]' placeholder='Add your list...' />
          <button className='py-[1rem] w-[3rem] text-white font-[700]'>ADD</button>
        </form>
        
        <div className='w-[21rem] flex justify-between p-[0.6rem] border-b-2 border-b-red-900'>
          <input type="checkbox" />
          <span>Related</span>
          <button className='bg-red-900 p-[0.3rem] rounded-md text-white'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default App
