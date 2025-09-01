import { authSlice, clearErrorMessage, onLogin, onLogout } from '../../../src/store/auth/authSlice'
import { authenticatedState, initialState } from '../../fixures/authStates'
import { testUserCredentials } from '../../fixures/testUser'

describe('Test in authSlice', () => {
    test('Should return initial state', () => {
        expect(authSlice.getInitialState()).toEqual(initialState)
    })

    test('Should login user', () => {
        const state = authSlice.reducer(initialState, onLogin(testUserCredentials))

        expect(state).toEqual({
            status: 'authenticated',
            user: testUserCredentials,
            errorMessage: undefined
        })
    })

    test('Should logout user', () => {
        const state = authSlice.reducer(authenticatedState, onLogout())

        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: undefined
        })
    })

    test('Should logout user with error message', () => {
        const errorMessage = 'Credentials are wrong'
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))

        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage
        })
    })

    test('Should clear error message', () => {
        const errorMessage = 'Credentials are wrong'
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))
        const newState = authSlice.reducer(state, clearErrorMessage())

        expect(newState.errorMessage).toBe(undefined)
    })
})