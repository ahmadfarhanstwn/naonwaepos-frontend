import React, {useCallback} from 'react'
import { useTheme, Grid, CssBaseline, Paper, Box, Avatar, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { AccountCircleOutlined } from '@mui/icons-material'
import CashierImage from '../assets/cashier-image.jpg';
import { Link } from 'react-router-dom'

const SignUpPage = () => {
    const theme = useTheme()

    const handleSubmit = useCallback((event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log('Sign Up')
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
                        t.palette.primary.light,
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
                        <AccountCircleOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="fullname"
                            label="Full Name"
                            name="fullname"
                        />
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
                        <FormControl fullWidth margin='normal'>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={}
                                label="Role"
                                // onChange={handleChange}
                                name='role'
                                required
                            >
                                <MenuItem defaultChecked value='superadmin'>Superadmin</MenuItem>
                                <MenuItem value='cashier'>Cashier</MenuItem>
                                <MenuItem value='management'>Management</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item>
                            <Link to="/signin">
                                <Typography variant="body2">
                                    {"Already have an account? Sign In"}
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

export default SignUpPage