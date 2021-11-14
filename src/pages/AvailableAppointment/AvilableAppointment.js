import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Title One',
        time: '09.00 AM - 10.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Title Two',
        time: '08.00 AM - 09.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Title three',
        time: '08.00 AM - 09.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Title four',
        time: '08.00 AM - 09.00 AM',
        space: 6,
    },
    {
        id: 5,
        name: 'Title One',
        time: '08.00 AM - 09.00 AM',
        space: 5,
    },
    {
        id: 6,
        name: 'Title One',
        time: '08.00 AM - 09.00 AM',
        space: 4,
    }
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', fontWeight:600, padding: 5 }}>Available Appointment on {date.toDateString()}</Typography>
           
            {bookingSuccess && <Alert sx={{ margin: 2 }} severity="success">Appointment Booked successfully!</Alert>}

            <Grid container spacing={2}>
                {
                    bookings.map(booking=><Booking 
                        key={booking.id} 
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                        >
                    </Booking>)
                }
                
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;