const initialState = {
    list: [
        { 
            todo: "Learn HTML", 
            isCompleted: false, 
            id: Math.floor(Math.random() *1000)
        },
        { 
            todo: "Learn CSS", 
            isCompleted: false, 
            id: Math.floor(Math.random() *1000) 
        },
        {
            todo: 'Learn React',
            isCompleted: true,
            id: Math.floor(Math.random() *1000)
        }
    ]
}

export const todoReducers = (state = initialState, action) => {
    switch(action.type) {
        case "ADDTODO":
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case "REMOVETODO":
            return {
                ...state,
                list: [...state.list].filter((t) => t.id != id)
            }
        // case "TOGGLECOMPLETE":
        //     return 
        default:
            return state
    }
}