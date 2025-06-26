import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo, useState } from 'react'

import { AuthLayout } from '../layout/AuthLayout'
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks'
import { useForm } from '../../hooks/useForm'

const data = {
    displayName: '',
    email: '',
    password: ''
}

const formValidations = {
    displayName: [value => value.length >= 1, 'The name is required'],
    email: [value => value.includes('@'), 'The email is invalid'],
    password: [value => value.length >= 6, 'The password is too short, please use at least 6 characters']
}

export const RegisterPage = () => {
    const dispatch = useDispatch()
    const [formSubmitted, setFormSubmitted] = useState(false)
    const { status, errorMessage } = useSelector(state => state.auth)
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status])
    const { displayName, email, password, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid } = useForm(data, formValidations)
    
    const onSubmit = event => {
        event.preventDefault()
        
        setFormSubmitted(true)

        if(!isFormValid) return

        dispatch(startCreatingUserWithEmailAndPassword({displayName, email, password}))
    }

    return (
        <AuthLayout title='Register'>
            <form className="animate__animated animate__fadeIn animate__faster" onSubmit={onSubmit}>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField label="Full name" type="text" placeholder="John Doe" fullWidth name="displayName" value={displayName} onChange={onInputChange} error={!!displayNameValid && formSubmitted} helperText={(!!displayNameValid && formSubmitted) ? displayNameValid : null} />
                    </Grid>

                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField label="Email" type="email" placeholder="email@google.com" fullWidth name="email" value={email} onChange={onInputChange} error={!!emailValid && formSubmitted} helperText={(!!emailValid && formSubmitted) ? emailValid : null} />
                    </Grid>

                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField label="Password" type="password" placeholder="Password" fullWidth name="password" value={password} onChange={onInputChange} error={!!passwordValid && formSubmitted} helperText={(!!passwordValid && formSubmitted) ? passwordValid : null} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} justifyContent="right">
                    <Grid item xs={12} sm={6} display={!!errorMessage ? '' : 'none'}>
                        <Alert severity='error'>{errorMessage}</Alert>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button type="submit" variant='contained' fullWidth disabled={isCheckingAuthentication}>Create account</Button>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='start'>
                    <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
                    <Link component={RouterLink} color='inherit' to='/auth/login'>Login</Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}
