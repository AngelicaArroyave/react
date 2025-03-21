import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useTodo } from '../../src/hooks/useTodo'

jest.mock('../../src/hooks/useTodo')

describe('Test in TodoApp component', () => {
    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Piedra del Alma', done: false },
            { id: 2, description: 'Piedra del Tiempo', done: true }
        ],
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        todosCount: 2,
        pendingTodosCount: 1
    })

    test('Should display the TodoApp component', () => {
        render(<TodoApp />)
        
        expect(screen.getByText('Piedra del Alma')).toBeTruthy()
        expect(screen.getByText('Piedra del Tiempo')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()
    })
})