import { createStore} from 'redux'
import { addTodo } from './reducers'

export const store = createStore(addTodo) 