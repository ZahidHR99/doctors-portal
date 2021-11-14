import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import React, {useState} from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../images/login.png';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, signInWithGoogle, isLoading, authError} = useAuth();

    const location = useLocation();
    const history  = useHistory();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Login</Typography>
                        {
                            isLoading && <CircularProgress />
                        }
                        {
                            user?.email &&  <Alert severity="success">Login successful</Alert>
                        }
                        {
                            
                            authError && <Alert severity="error">Login Fail</Alert>
                        }
                            <form onSubmit={handleLoginSubmit}>
                            <TextField
                                id="standard-basic"
                                name="email"
                                sx={{width:'75%', m:1}}
                                label="Your mail"
                                variant="standard"
                                onChange={handleOnChange}
                            />
                            <TextField
                                id="standard-basic"
                                name="password"
                                sx={{width:'75%', m:1}}
                                label="Your password"
                                variant="standard"
                                onChange={handleOnChange}
                            />
                            
                            <Button sx={{ width: '75%', m:1 }} type="submit" variant="contained">Login</Button>
                            <NavLink style={{ textDecoration: 'none' }} to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                        </form>
                        <p>-------------------------------</p>
                        <Button variant="contained" onClick={handleGoogleSignIn} color="error" size="large">
                            Sign In with Google
                        </Button>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <img src={login} style={{ width: '100%'}} alt=""/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;