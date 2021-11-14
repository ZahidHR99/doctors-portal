import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{width:400, marginTop: '-110px'}}
                        src={doctor} alt="" />
                </Grid>
                    
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center'}}>
                        <Box>
                            <Typography variant="h6" sx={{ mb:5}}>
                                Appointment
                            </Typography>
                            <Typography variant="h4" sx={{ mb:5}}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant="h6" sx={{ mb:3}} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis laborum odio incidunt. Quas expedita, vitae in incidunt minima adipisci optio? Eos reiciendis quas sint, officia cum fuga sapiente est!
                            </Typography>
                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>     
                
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;