import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'

import { AuthLayout } from '../layout/AuthLayout'
import { startGoogleSignIn, startLoggingWithEmailAndPassword } from '../../store/auth/thunks'
import { useForm } from '../../hooks/useForm'

export const LoginPage = () => {
    const { status, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    })

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = event => {
        event.preventDefault()

        dispatch(startLoggingWithEmailAndPassword({ email, password }))
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())
    }
    
    return (
        <AuthLayout title='Login'>
            <form className="animate__animated animate__fadeIn animate__faster" onSubmit={onSubmit}>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField label="Email" type="email" placeholder="email@google.com" name="email" value={email} onChange={onInputChange} fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField label="Password" type="password" placeholder="Password" name="password" value={password} onChange={onInputChange} fullWidth />
                    </Grid>
                </Grid>

                <Grid container display={!!errorMessage ? '' : 'none'}>
                    <Grid item xs={12} sm={6}>
                        <Alert severity='error'>{errorMessage}</Alert>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} justifyContent="right">
                    <Grid item xs={12} sm={6}>
                        <Button type="submit" variant='contained' fullWidth disabled={isAuthenticating}>Login</Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button variant='contained' fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}> 
                            <Google />
                            <Typography sx={{ ml: 1 }}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='start'>
                    <Link component={RouterLink} color='inherit' to='/auth/register'>Create an account</Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}
