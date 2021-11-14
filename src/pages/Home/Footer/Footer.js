import { Container, Grid } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Container>
           <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Typography variant="h6" gutterBottom component="div">
                        Home
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6" gutterBottom component="div">
                        Contact Us
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6" gutterBottom component="div">
                        About Us
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6" gutterBottom component="div">
                        Support
                    </Typography>
                </Grid>
               
            </Grid>
        </Container>
    );
};

export default Footer;