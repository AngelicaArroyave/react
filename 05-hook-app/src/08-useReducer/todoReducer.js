export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] ADD':
            return [...initialState, action.payload]
        case '[TODO] DELETE':
            return initialState.filter(todo => todo.id !== action.payload)
        case '[TODO] TOGGLE':
            return initialState.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        // case '[TODO] PENDING':
        //     return initialState.filter(todo => !todo.done).length
        default:
            return initialState
    }
}