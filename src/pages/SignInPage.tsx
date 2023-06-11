import React, {useCallback} from 'react'
import { useTheme, Grid, CssBaseline, Paper, Box, Avatar, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import CashierImage from '../assets/cashier-image.jpg';
import { Link } from 'react-router-dom'

const SignInPage = () => {
    const theme = useTheme()

    const handleSubmit = useCallback((event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log('Sign In')
    }, [])

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${CashierImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.primary.main,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            <Link to="#">
                                <Typography variant="body2">
                                    Forgot password?
                                </Typography>
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link to="/signup">
                                <Typography variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Typography>
                            </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignInPage