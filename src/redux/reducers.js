const initialState = {
    list: []
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
                list: [...state.list].filter((t) => t.id !== action.payload)
            }
        case "TOGGLECOMPLETE":
            return {
                ...state,
                list: [...state.list].map((t) => t.id === action.payload? {...t, isCompleted: !t.isCompleted} : t) 
            }
        default:
            return state
    }
}