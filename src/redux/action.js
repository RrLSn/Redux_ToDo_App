 export const addTodo = (todo) => {
    return {
        type: "ADDTODO",
        payload: todo
    }
 }
 
 export const removeTodo = (id) => {
    return {
        type: "REMOVETODO",
        payload: id
    }
 }

 export const toggleComplete = (id) => {
    return {
        type: "TOGGLECOMPLETE",
        payload: id
    }
 }

