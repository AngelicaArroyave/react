import { authReducer } from '../../../src/auth/context/authReducer'
import { types } from '../../../src/auth/types/types'

describe('Test in authReducer', () => {
    test('Should return the initial state', () => { 
        const state = authReducer({ logged: false }, {})

        expect(state).toEqual({ logged: false })
    })

    test('Should call login, authenticate and set the user', () => {
        const action = {
            type: types.login,
            payload: { id: 123, name: 'Angie Arias' }
        }
        const state = authReducer({ logged: false }, action)

        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
    })

    test('Should logout, delete the user name and logged in false', () => {
        const state = {
            logged: true,
            user: { id: 123, name: 'Angie Arias' }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action)

        expect(newState).toEqual({ logged: false })
    })
})