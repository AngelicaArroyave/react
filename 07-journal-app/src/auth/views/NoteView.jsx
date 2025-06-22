import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../../journal/components/ImageGallery'
import Swal from 'sweetalert2'
import { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'sweetalert2/dist/sweetalert2.css'

import { StartDeletingNote, StartSaveNote, StartUploadingFiles } from '../../store/journal/thunks'
import { setActiveNote } from '../../store/journal/journalSlice'
import { useForm } from '../../hooks/useForm'

export const NoteView = () => {
    const dispatch = useDispatch()
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)
    const { title, body, date, onInputChange, formState } = useForm(note)
    const dateString = useMemo(() => {
        const newDate = new Date(date)

        return newDate.toUTCString()
    }, [date])
    const fileInputRef = useRef()

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if(messageSaved.length > 0) {
            Swal.fire('Note updated', messageSaved, 'success')
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(StartSaveNote())
    }

    const onFileInputChange = ({ target }) => {
        if(target.files === 0) return

        dispatch(StartUploadingFiles(target.files))
    }

    const onDeleteNote = () => {
        dispatch(StartDeletingNote())
    }

    return (
        <>
            <Grid container className="animate__animated animate__fadeIn animate__faster" direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
                <Grid item>
                    <Typography fontSize={ 39 } fontWeight='light'>{ dateString }</Typography>
                </Grid>

                <Grid item>
                    <input type="file" multiple ref={fileInputRef} onChange={onFileInputChange} style={{ display: 'none' }} />

                    <IconButton color='primary' disabled={isSaving} onClick={() => fileInputRef.current.click()}>
                        <UploadOutlined />
                    </IconButton>

                    <Button color="primary" sx={{ padding: 2 }} disabled={isSaving} onClick={onSaveNote}>
                        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                        Save
                    </Button> 
                </Grid>
            </Grid>

        
            <Grid container>
                <TextField type="text" variant="filled" fullWidth placeholder="Enter a title" label="Title" sx={{ border: 'none', mb: 1 }} name='title' value={title} onChange={onInputChange} />
                <TextField type="text" variant="filled" fullWidth multiline placeholder="What happened today?" minRows={ 5 } name='body' value={body} onChange={onInputChange} />
            </Grid>

            <Grid container justifyContent='end'>
                <Button sx={{ mt:2 }} color='error' onClick={onDeleteNote}>
                    <DeleteOutline />
                    Delete
                </Button>
            </Grid>

            <ImageGallery images={note.imageUrls} />
        </>
    )
}
