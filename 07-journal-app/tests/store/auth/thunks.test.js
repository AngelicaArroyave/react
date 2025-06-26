import { checkingAuthentication, startGoogleSignIn, startLoggingWithEmailAndPassword, startLogout } from '../../../src/store/auth/thunks'
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice'
import { clearNotesLogout } from '../../../src/store/journal/journalSlice'
import { demoUser } from '../../fixtures/authFixtures'
import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from '../../../src/firebase/providers'

jest.mock('../../../src/firebase/providers')

describe('Test in authThunks', () => {
    const dispatch = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('You must invoke the checkingCredentials/checkingAuthentication', async() => {
        await checkingAuthentication()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    })

    test('StartGoogleSignIn should call checkingCredentials and login - success', async() => {
        const loginData = {
            ok: true,
            ...demoUser
        }

        await signInWithGoogle.mockResolvedValue(loginData)
        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
    })

    test('StartGoogleSignIn should call checkingCredentials and login - error', async() => {
        const loginData = {
            ok: false,
            errorMessage: 'Error in Google'
        }

        await signInWithGoogle.mockResolvedValue(loginData)
        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))
    })

    test('StartLoginWithEmailPassword should call checkingCredentials and login - success', async() => {
        const loginData = {
            ok: true,
            ...demoUser
        }
        const formData = {
            email: demoUser.email,
            password: '123456'
        }

        await loginWithEmailPassword.mockResolvedValue(loginData)
        await startLoggingWithEmailAndPassword(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
    })

    test('StartLoginWithEmailPassword should call checkingCredentials and login - error', async() => {
        const loginData = {
            ok: false,
            errorMessage: 'Error in login'
        }
        const formData = {
            email: demoUser.email,
            password: '123456'
        }

        await loginWithEmailPassword.mockResolvedValue(loginData)
        await startLoggingWithEmailAndPassword(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))
    })

    test('StartLogout should call logoutFirebase, clearNotes and logout', async() => {
        await startLogout()(dispatch)

        expect(logoutFirebase()).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
        expect(dispatch).toHaveBeenCalledWith(logout())
    })
})