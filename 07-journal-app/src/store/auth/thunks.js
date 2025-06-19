import { checkingCredentials, login, logout } from './authSlice'
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailAndPassword, signInWithGoogle } from '../../firebase/providers'

export const checkingAuthentication = (email, password) => {
    return async dispatch => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async dispatch => {
        dispatch(checkingCredentials())
        const result = await signInWithGoogle()
        
        if(!result.ok) return dispatch(logout(result.errorMessage))

        return dispatch(login(result))
    }
}

export const startCreatingUserWithEmailAndPassword = ({displayName, email, password}) => {
    return async dispatch => {
        dispatch(checkingCredentials())

        const { ok, photoURL, uid, errorMessage } = await registerUserWithEmailAndPassword({displayName, email, password})

        if(!ok) return dispatch(logout({ errorMessage }))

        return dispatch(login({ displayName, email, photoURL, uid }))
    }
}

export const startLoggingWithEmailAndPassword = ({email, password}) => {
    return async dispatch => {
        dispatch(checkingCredentials())

        const { ok, photoURL, uid, errorMessage } = await loginWithEmailPassword({email, password})

        if(!ok) return dispatch(logout({ errorMessage }))

        return dispatch(login({ email, photoURL, uid }))
    }
}

export const startLogout = () => {
    return async dispatch => {
        await logoutFirebase()
        dispatch(logout())
    }
}