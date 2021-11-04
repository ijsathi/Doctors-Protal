import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography,Container,Box } from '@mui/material';

const bannerBg ={
    background:`url(${bg})`,
}
const verticalCenter ={
    display:'flex',
    alignItems:'center',
    height:450
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{flexGrow: 1, textAlign:"center" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{...verticalCenter,  textAlign:"left" }}>
           <Box>
           <Typography variant='h3'>
                Your New Smile <br /> Starts Here
            </Typography>
            <Typography variant='h6' style={{my:5,color:'gray',fontSize:14, fontWeight:300}}>
                Your Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, tempore sint provident dicta doloremque quos recusandae quis amet rerum eum.
            </Typography><br />
            <Button style={{ backgroundColor:"#60E2E3" }} variant='contained' >Get Appointment</Button>
           </Box>
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={6}>
            <img style={{width:'300px',}} src={chair} alt="" />
        </Grid>
       </Grid>
    </Container>
    
    );
};

export default Banner;