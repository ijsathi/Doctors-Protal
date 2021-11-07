import { Alert, Container, Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id:1,
        name:'Teeth Orthodontics',
        time:'8:00 am - 9.00 am',
        space:10
    },
    {
        id:2,
        name:'Cosmetic Dentistry',
        time:'10:00 am - 11.30 am',
        space:7
    },
    {
        id:3,
        name:'Teeth Cleaning',
        time:'5:00 pm - 6.30 pm',
        space:8
    },
    {
        id:4,
        name:'Cavity Protection',
        time:'7:00 pm - 8.40 pm',
        space:10
    },
    {
        id:5,
        name:'Pediatric Dental',
        time:'9:00 pm - 10.00 pm',
        space:9
    },
    {
        id:6,
        name:'Oral Surgery',
        time:'10:00 pm - 11.00 pm',
        space:10
    }
]

const AvailabeAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container style={{textAlign:"center"}}>
            <h2 style={{color:'#33E2FF', mb:3}} >Available Appointment on: {date.toDateString()}</h2>
            {
            bookingSuccess && <Alert severity="success">Congress!Appointment Booked</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailabeAppointment;