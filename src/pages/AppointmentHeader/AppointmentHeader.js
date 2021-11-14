import React from 'react';
import { Container, Grid } from '@mui/material';
import chair from '../../images/chair.png';
import Calender from '../Calender/Calender';

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2} style={{ marginTop: '2px'}}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chair} alt="" style={{width:'100%'}} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;