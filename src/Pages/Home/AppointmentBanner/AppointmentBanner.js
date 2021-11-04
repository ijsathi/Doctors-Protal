import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background:`url(${bg})`,
    backgroundColor:'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode:'darken,luminosity',
    marginTop:175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1,textAlign: 'center' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img 
                style={{width:400,marginTop:'-110px'}} 
                src={doctor} 
                alt="" 
            />
        </Grid>
        <Grid item xs={12} sx={{display:"flex",justifyContent:"flex-start", textAlign:'left', alignItems:"center"}} md={6}>
           <Box>
           <Typography style={{color:'#60E2E3'}} sx={{mb:6}} variant="h6">
                Appoinment
            </Typography>
            <Typography style={{color:'white'}} sx={{mt:6}} variant="h4">
               Make an Appoinment Today
            </Typography>
            <Typography style={{color:'white',fontSize:14, fontWeight:300}} variant="h6">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ducimus tempora pariatur.
            </Typography><br />

            <Button  variant='contained'>Learn More</Button>
           </Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;