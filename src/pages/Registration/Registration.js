import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import React, {useState} from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import login from '../../images/login.png';
import Navigation from '../Shared/Navigation/Navigation';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history  = useHistory();
 
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('password not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, history);
        e.preventDefault();
    }

    return (
        <>
        <Navigation></Navigation>
        <Container>   
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Register</Typography>
                        {
                            isLoading && <CircularProgress />
                        }
                        {
                            user?.email &&  <Alert severity="success">Registration successful</Alert>
                        }
                        {
                            
                            authError && <Alert severity="error">Registration Fail</Alert>
                        }
                        { !isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                id="standard-basic"
                                name="name"
                                type="text"
                                sx={{width:'75%', m:1}}
                                label="Your Name"
                                variant="standard"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                id="standard-basic"
                                name="email"
                                type="email"
                                sx={{width:'75%', m:1}}
                                label="Your mail"
                                variant="standard"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                id="standard-basic"
                                name="password"
                                type="password"
                                sx={{width:'75%', m:1}}
                                label="Your password"
                                variant="standard"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                id="standard-basic"
                                name="password2"
                                type="password"
                                sx={{width:'75%', m:1}}
                                label="Re password"
                                variant="standard"
                                onBlur={handleOnBlur}
                            />
                            
                            <Button sx={{ width: '75%', m:1 }} type="submit" variant="contained">Register</Button>
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button variant="text">Already Register ? Please Login</Button>
                            </NavLink>
                        </form>}
                        
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <img src={login} style={{ width: '100%'}} alt=""/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Registration;