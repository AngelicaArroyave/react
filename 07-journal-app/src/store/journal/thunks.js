import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'

import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from './journalSlice'
import { fileUpload } from '../../helpers/fileUpload'
import { FirebaseDB } from '../../firebase/config'
import { loadNotes } from '../../helpers/loadNotes'

export const startNewNote = () => {
    return async(dispatch, getState) => {
        dispatch(savingNewNote())

        const { uid } = getState().auth
        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime()
        }
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
        
        await setDoc(newDoc, newNote)
        newNote.id = newDoc.id
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}

export const StartLoadingNotes = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth

        if(!uid) throw new Error('The uid not exists')
        
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const StartSaveNote = () => {
    return async(dispatch, getState) => {
        dispatch(setSaving())

        const { uid } = getState().auth
        const { active: note } = getState().journal
        const noteToFirestore = { ...note }

        delete noteToFirestore.id

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFirestore, { merge: true })

        dispatch(updateNote(note))
    }
}

export const StartUploadingFiles = (files = []) => {
    return async dispatch => {
        dispatch(setSaving())
        
        const fileUploadPromises = []

        for (const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }

        const photosUrls = await Promise.all(fileUploadPromises)

        dispatch(setPhotosToActiveNote(photosUrls))
    }
}

export const StartDeletingNote = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth
        const { active: note } = getState().journal

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
        
        await deleteDoc(docRef)
        dispatch(deleteNoteById(note.id))
    }
}