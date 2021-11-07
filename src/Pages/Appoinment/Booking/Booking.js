import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import BookingModal from '../Appoinment/BookingModal/BookingModal';

const Booking = ({booking, date, setBookingSuccess}) => {
    const {name, time, space} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpen = () => setOpenBooking(true);
    const handleClose = () => setOpenBooking(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5}} >
            <Typography style={{color:'#33E2FF',fontWeight:"600"}} variant="h5" gutterBottom component="div">
               {name}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
               {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {space} SPACES AVAILABLE
            </Typography>
            <Button onClick={handleOpen} style={{backgroundColor:'#33E2FF'}} variant='contained'>BOOK APPOINTMENT</Button>
            </Paper>
        </Grid>
        <BookingModal
            booking={booking}
            date={date}
            openBooking={openBooking}
            handleClose={handleClose}
            setBookingSuccess={setBookingSuccess}
        ></BookingModal>
        </>
    );
};

export default Booking;