import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
    },
    reducers: {
        savingNewNote: state => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload
            state.messageSaved = ''
        },
        setNotes: (state, action) => {
            state.notes = action.payload
            state.messageSaved = ''
        },
        setSaving: (state, action) => {
            state.isSaving = true
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false
        },
        updateNote: (state, action) => {
            state.isSaving = false
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id) return action.payload

                return note
            })
            state.messageSaved = `${action.payload.title} saved successfully`
        },
        clearNotesLogout: state => {
            state.isSaving = false
            state.messageSaved = ''
            state.notes = []
            state.active = null
        },
        deleteNoteById: (state, action) => {
            state.active = null
            state.notes = state.notes.filter(note => note.id !== action.payload)
        }
    }
})

export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, setPhotosToActiveNote, updateNote, clearNotesLogout, deleteNoteById } = journalSlice.actions