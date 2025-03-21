import { todoReducer } from '../../src/08-useReducer/todoReducer'

describe('Test in useReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }]

    test('Should return the initial state', () => {
        const newState = todoReducer(initialState, {})

        expect(newState).toEqual(initialState)
    })

    test('Should add a new todo', () => {
        const action = {
            type: '[TODO] ADD',
            payload: {
                id: 2,
                description: 'New todo',
                done: false
            }
        }
        const newState = todoReducer(initialState, action)

        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)
        expect(newState[1].description).toBe('New todo')
    })

    test('Should remove a todo', () => {
        const action = {
            type: '[TODO] DELETE',
            payload: 1
        }
        const newState = todoReducer(initialState, action)

        expect(newState.length).toBe(0)
    })

    test('Should make the toggle in todo', () => {
        const action = {
            type: '[TODO] TOGGLE',
            payload: 1
        }
        const newState = todoReducer(initialState, action)

        expect(newState[0].done).toBe(true)

        const newState2 = todoReducer(newState, action)

        expect(newState2[0].done).toBe(false)
    })
})