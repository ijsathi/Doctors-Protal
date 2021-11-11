import { Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Calender from '../../Home/Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
             <Calender
                date={date}
                setDate={setDate}
             ></Calender>
            </Grid>
            <Grid item xs={12} md={7}>
              <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;