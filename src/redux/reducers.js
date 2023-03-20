const todoReducer = (state = {todos: []}, action) => {
    switch (action.type) {
        case 'ADDTASK':
            return state.concat({todo: todos, isCompleted: false, id: Math.floor(Math.random()* 1000)});
        case 'DELETETASK':
            return state.filter((t) => t.id != id);
        case 'COMPLETEDTASK':
            return state;
        default:
            return state
    }
}