 export const ADDTODO = "ADDTODO";
 export const DELETETODO = "DELETETODO";

 export const addTodoList = (id, todo) => {
    let task = {
        id: id,
        task: todo
    }

    return {
        type: ADDTODO,
        payload: task 
    }
 }

 export const deleteTodoList = (id) => {
    return {
        type: DELETETODO,
        payload: id
    }
 }