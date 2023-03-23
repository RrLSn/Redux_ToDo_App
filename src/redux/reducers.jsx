import { ADDTODO, DELETETODO } from "../redux/action"

const initialstate = {
    todos: [],
}

const reducer = (state = initialstate, action) => {
    switch(action.type){
        case ADDTODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        id: action.payload.id,
                        task: action.payload.task
                    }
                ]
            }
        case DELETETODO:
            return {
                todos: [...state.todos.filter((todo) => todo.id !== action.payload)]
            }
        default:
            return state
    }
}

export default reducer