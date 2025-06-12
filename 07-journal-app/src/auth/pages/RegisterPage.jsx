import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router'

import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
    return (
        <AuthLayout title='Register'>
            <form>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField label="Full name" type="text" placeholder="John Doe" fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField label="Email" type="email" placeholder="email@google.com" fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField label="Password" type="password" placeholder="Password" fullWidth />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} justifyContent="right">
                    <Grid item xs={12} sm={6}>
                        <Button variant='contained' fullWidth>Create account</Button>
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
