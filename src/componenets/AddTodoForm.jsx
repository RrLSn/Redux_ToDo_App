import { connect } from "react-redux"
import { addTodo } from "../redux/action"

const AddTodoForm = () => {

  const state = {
  todo: "",
  }

  const handleChange = (e) => {
    this.setState({todo: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.todo)
    
  }


  return (
    <div>
        <form className='mb-[3rem]' onSubmit={handleSubmit}>
          <input type="text" className='italic w-[18rem] p-[1rem] focus:outline-none' placeholder='Add your list...' name="todo" onChange={(e) => handleChange(e)} />
          <button className='py-[1rem] w-[3rem] text-white font-[700] bg-red-900 rounded-r-md'>ADD</button>
        </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo : todo => dispatch(addTodo(todo))
  }
}
export default connect(null,mapDispatchToProps) (AddTodoForm)