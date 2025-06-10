import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/TodoItem'

describe('Test in TodoItem component', () => {
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }
    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('Should display the pending Todo', () => {
        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock } />)

        const liElement = screen.getByRole('listitem')

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
        
        const spanElement = screen.getByLabelText('span')

        expect(spanElement.textContent).toContain('Piedra del Alma')
        expect(spanElement.className).toContain('align-self-center')
    })

    test('Should display the completed Todo', () => {
        todo.done = true
        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock } />)

        const spanElement = screen.getByLabelText('span')

        expect(spanElement.className).toContain('text-decoration-line-through')
    })

    test('Should call the ToggleTodo by clicking in this', () => {
        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock } />)

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
    })

    test('Should call the deleteTodo function', () => {
        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock } />)

        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    })
})