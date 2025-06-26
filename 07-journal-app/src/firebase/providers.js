import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'

import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            message: 'Successfully signed in',
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const registerUserWithEmailAndPassword = async({displayName, email, password}) => {
    try {
        const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { photoURL, uid } = response.user

        await updateProfile(FirebaseAuth.currentUser, { displayName })
        
        return {
            ok: true,
            message: 'Successfully registered',
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const loginWithEmailPassword = async({ email, password }) => {
    try {
        const response = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { displayName, photoURL, uid } = response.user

        await updateProfile(FirebaseAuth.currentUser, { displayName })

        return {
            ok: true,
            message: 'Successfully logged in',
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}