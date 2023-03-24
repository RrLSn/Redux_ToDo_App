import './App.css'
import AddTodoForm from './componenets/AddTodoForm'
import TodoList from './componenets/TodoList'

function App() {
  

  return (
    <div className="App text-center p-[2rem] grid place-items-center">
      <h1 className='text-6xl font-[700] mb-[4rem] underline text-red-900'>My To_do App</h1>

      <div className='w-[25rem] min-h-[35rem] bg-[pink] p-[2rem] rounded-lg shadow-2xl shadow-red-900'>
        <AddTodoForm />
        <TodoList />
      </div>
    </div>
  )
}

export default App
