import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container, Box } from '@mui/material';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg = {
    background: `url(${bg})`,
}

const varticalCenter = {
    display: 'flex',
    height: 400,
    alignItem: 'center'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, padding: 5 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={5}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br/>
                            Start Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 13, fontWeight: '300', color: 'gray' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia amet nihil ratione libero perferendis, similique, id sint, sunt ipsa est officia? Fugiat magni provident velit sequi deserunt saepe voluptas libero?
                        </Typography>
                        <Button variant="contained" style={{ background: '#5CE7ED' }}>
                            Get Appointment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} style={varticalCenter}>
                    <img src={chair} alt="" style={{ width: '600px'}} />
                </Grid>
            </Grid>
         </Container>
    );
};

export default Banner;