import { configureStore } from '@reduxjs/toolkit'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'

import { authSlice } from '../../../src/store/auth/authSlice'
import { LoginPage } from '../../../src/auth/pages/LoginPage'
import { notAuthenticatedState } from '../../fixtures/authFixtures'

const mockStartGoogleSignIn = jest.fn()
const mockStartLoggingWithEmailAndPassword = jest.fn()

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoggingWithEmailAndPassword: ({ email, password }) => {
        return () => mockStartLoggingWithEmailAndPassword({ email, password })
    }
}))

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn()
}))

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
})

describe('Test in LoginPage', () => {
    beforeEach(() => clearAllMocks())

    test('Should render the LoginPage', () => {
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getAllByAltText('Login'.length)).toBeGreaterThanOrEqual(1)
    })
    
    test('Google button should be called StartGoogleSignIn', () => {
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

        const googleBtn = screen.getByLabelText('google-btn')

        fireEvent.click(googleBtn)
        expect(mockStartGoogleSignIn).toHaveBeenCalled()
    })
    
    test('Submit should be called StartLoginWithEmailPassword', () => {
        const email = 'google@email.com'
        const password = '123456'
        
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

        const emailField = screen.getByRole('textbox', { name: 'Email' })
        fireEvent.change(emailField, { target: { name: 'email', value: email } })

        const passwordField = screen.getByTestId('password')
        fireEvent.change(passwordField, { target: { name: 'password', value: password } })

        const loginForm = screen.getByLabelText('submit-form')
        fireEvent.submit(loginForm)

        expect(mockStartLoggingWithEmailAndPassword).toHaveBeenCalledWith({ email, password })
    })
})