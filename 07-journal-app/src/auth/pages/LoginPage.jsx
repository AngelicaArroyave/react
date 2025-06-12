import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router'

import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
    return (
        <AuthLayout title='Login'>
            <form>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField label="Email" type="email" placeholder="email@google.com" fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField label="Password" type="password" placeholder="Password" fullWidth />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} justifyContent="right">
                    <Grid item xs={12} sm={6}>
                        <Button variant='contained' fullWidth>Login</Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button variant='contained' fullWidth>
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
