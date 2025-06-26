import { authSlice, checkingCredentials, login, logout } from '../../../src/store/auth/authSlice'
import { authenticatedState, demoUser, initialState } from '../../fixtures/authFixtures'

describe('Test in authSlice', () => {
    test('It should return to the initial state and be called "auth"', () => {
        const state = authSlice.reducer(initialState, {})

        expect(authSlice.name).toBe('auth')
        expect(state).toEqual(initialState)
    })

    test('You must perform authentication', () => {
        const state = authSlice.reducer(initialState, login(demoUser))

        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: undefined
        })
    })

    test('You must logout', () => {
        const state = authSlice.reducer(authenticatedState, logout())

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })
    })

    test('You must logout and display an error message.', () => {
        const errorMessage = 'Incorrect credentials'
        const state = authSlice.reducer(authenticatedState, logout({ errorMessage }))

        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage
        })
    })

    test('You must change the status to checking', () => {
        const state = authSlice.reducer(authenticatedState, checkingCredentials())
        
        expect(state.status).toBe('checking')
    })
})