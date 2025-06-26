import { addNewEmptyNote, savingNewNote, setActiveNote } from '../../../src/store/journal/journalSlice'
import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../../src/firebase/config'
import { startNewNote } from '../../../src/store/journal/thunks'

describe('Test in journalThunks', () => {
    const dispatch = jest.fn()
    const getState = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('StartNote should create a new blank note', async() => {
        const uid = 'Test-UID'

        getState.mockReturnValue({
            auth: {
                uid
            }
        })
        await startNewNote()(dispatch, getState)

        expect(dispatch).toHaveBeenCalledWith(savingNewNote())
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number)
        }))
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number)
        }))

        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
        const docs = await getDocs(collectionRef)
        const deletePromises = []

        docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)))
        await Promise.all(deletePromises)
    })
})