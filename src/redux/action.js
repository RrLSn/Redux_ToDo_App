 export const addTodo = (todo) => {
    return {
        type: "ADDTODO",
        payload: todo
    }
 }
 
 export const removeTodo = (todo) => {
    return {
        type: "REMOVETODO",
        payload: todo
    }
 }

//  export const toggleComplete = 
