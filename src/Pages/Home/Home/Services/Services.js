import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Fluoride from '../../../../images/fluoride.png';
import cavity from '../../../../images/cavity.png';
import whitening from '../../../../images/whitening.png';

const services = [
  {name: 'Fluoride Treatment', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero suscipit natus, obcaecati voluptates esse dignissimos non vitae repellendus consectetur, neque numquam repellat! Accusamus earum similique temporibus, eaque qui iusto voluptas." , img: Fluoride },

  {name: 'Cavity Fillings', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero suscipit natus, obcaecati voluptates esse dignissimos non vitae repellendus consectetur, neque numquam repellat! Accusamus earum similique temporibus, eaque qui iusto voluptas." , img: cavity },

  {name: 'Teeth Whitening', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero suscipit natus, obcaecati voluptates esse dignissimos non vitae repellendus consectetur, neque numquam repellat! Accusamus earum similique temporibus, eaque qui iusto voluptas." , img: whitening },
]

const Services = () => {
    return (
    <Box sx={{ flexGrow: 1 ,textAlign: 'center', }}>
      <Container>
      <Typography  sx={{ fontWeight: 500,m:2 }}  style={{color:'#60E2E3'}} variant="h6" component="div">
                   OUR SERVICES
      </Typography>
      <Typography  sx={{ fontWeight: 600,m:2 }} variant="h4" component="div">
                  Services We Provide
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {services.map(service => <Service
          key={service.name}
          service={service}
        ></Service>)}
      </Grid>
      </Container>
    </Box>
    );
};

export default Services;