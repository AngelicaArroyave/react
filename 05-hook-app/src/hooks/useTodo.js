import { todoReducer } from '../08-useReducer/todoReducer'
import { useEffect, useReducer } from 'react'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = todo => {
        const action = {
            type: '[TODO] ADD',
            payload: todo
        }

        dispatch(action)
    }

    const handleDeleteTodo = id => {
        dispatch({
            type: '[TODO] DELETE',
            payload: id
        })
    }

    const handleToggleTodo = id => {
        dispatch({
            type: '[TODO] TOGGLE',
            payload: id
        })
    }

    return {
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}