import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth(); 
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>
                    <Button color="inherit"><Link style={{ textDecoration:'none', color: 'white' }} to="/">Home</Link></Button>
                    <Button color="inherit"><Link style={{ textDecoration:'none', color: 'white' }} to="/appointment">Appointment</Link></Button>
                   
                    {
                        user?.email ?
                        <Box>
                            <Button color="inherit"><Link style={{ textDecoration:'none', color: 'white' }} to="/dashboard">Dashboard</Link></Button>
                            <Button onClick={logOut} style={{ textDecoration:'none', color: 'white' }} color="inherit">LogOut</Button>
                        </Box>
                        
                        :
                        <Button color="inherit"><Link style={{ textDecoration:'none', color: 'white' }} to="/login">Login</Link></Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;