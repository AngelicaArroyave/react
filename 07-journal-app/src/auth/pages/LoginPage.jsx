import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'

import { AuthLayout } from '../layout/AuthLayout'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'
import { useForm } from '../../hooks/useForm'

export const LoginPage = () => {
    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const { email, password, onInputChange } = useForm({
        email: 'aarias@gmail.com',
        password: '123456'
    })

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = event => {
        event.preventDefault()

        dispatch(checkingAuthentication())
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())
    }
    
    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField label="Email" type="email" placeholder="email@google.com" name="email" value={email} onInputChange={onInputChange} fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField label="Password" type="password" placeholder="Password" name="password" value={password} onInputChange={onInputChange} fullWidth />
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
