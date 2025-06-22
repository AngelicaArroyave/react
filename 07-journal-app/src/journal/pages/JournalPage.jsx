import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../../auth/views/NothingSelectedView'
import { NoteView } from '../../auth/views/NoteView'
import { startNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {
    const dispatch = useDispatch()
    const { isSaving, active } = useSelector(state => state.journal)

    const onClickNewNote = () => {
        dispatch(startNewNote())
    }

    return (
        <JournalLayout>
            {
                (!!active) ? <NoteView /> : <NothingSelectedView />
            }

            <IconButton size='large' sx={{ color: 'white', backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, position: 'fixed', bottom: 50, right: 50 }} disabled={isSaving} onClick={onClickNewNote}>
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    )
}
