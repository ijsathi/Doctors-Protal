import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fade, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({openBooking,handleClose, booking, date,setBookingSuccess}) => {
    const {name,time} = booking;
    const {user} = useAuth();

    const initialInfo = {patientName:user.displayName, email:user.email, phone:''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...bookingInfo};
      newInfo[field] = value;
      setBookingInfo(newInfo);
    };

    const handleBookSubmit = e =>{
        // alert('submitting');
        const appointment = {
          ...bookingInfo,
          time,
          serviceName:name,
          date:date.toLocaleDateString()
        }
        // send to the server
        fetch('http://localhost:5000/appointments',{
          method:'POST',
          headers:{
            'content-type' : 'application/json'
          },
          body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            setBookingSuccess(true);
            handleClose();
          }
        });

        e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={openBooking}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            {/* <Typography id="spring-modal-description" sx={{ mt: 2 }}>
             {time}
            </Typography> */}
            <form onSubmit={handleBookSubmit} >
            <TextField
                disabled
                sx={{width:'90%', m:1}}
                id="outlined-size-small"
                defaultValue={time}
                size="small"
            />
            <TextField
                sx={{width:'90%', m:1}}
                id="outlined-size-small"
                name="patientName"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                size="small"
            />
            <TextField
                sx={{width:'90%', m:1}}
                id="outlined-size-small"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}
                size="small"
            />
            <TextField
                sx={{width:'90%', m:1}}
                id="outlined-size-small"
                name="phone"
                onBlur={handleOnBlur}
                defaultValue='phone number'
                size="small"
            />
            <TextField
                disabled
                sx={{width:'90%', m:1}}
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
            />
             <Button type='submit' style={{backgroundColor:'#60E2E3'}} variant='contained'>SEND</Button>

            </form>
          </Box>
        </Fade>
        </Modal>
    );
};

export default BookingModal;