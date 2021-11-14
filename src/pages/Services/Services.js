import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Service from '../Home/Single-Service/Service';
import fluoride from '../../images/fluoride.png';
import whitening from '../../images/fluoride.png';
import treatment from '../../images/fluoride.png';

const services = [
    {
        name: 'Florida Treatement 1',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, ullam laborum aliquid quae nemo, eos reiciendis deleniti repellat blanditiis reprehenderit officiis suscipit magnam error! Earum aliquam sed dolorem voluptas. Dolore.',
        img: fluoride
    },
    {
        name: 'Florida Treatement 2',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, ullam laborum aliquid quae nemo, eos reiciendis deleniti repellat blanditiis reprehenderit officiis suscipit magnam error! Earum aliquam sed dolorem voluptas. Dolore.',
        img: whitening
    },
    {
        name: 'Florida Treatement 3',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, ullam laborum aliquid quae nemo, eos reiciendis deleniti repellat blanditiis reprehenderit officiis suscipit magnam error! Earum aliquam sed dolorem voluptas. Dolore.',
        img: treatment
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography sx={{ fontWeight: 500, m: 2 }} variant="h6" component="h2">
                OUR SERVICES
            </Typography>
            <Typography sx={{ fontWeight: 600 }} variant="h4" component="h2">
                Service We Provide
            </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service=><Service
                            key={service.name}
                            service={service}
                        >

                        </Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;