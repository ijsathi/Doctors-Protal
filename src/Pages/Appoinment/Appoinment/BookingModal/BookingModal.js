import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fade, TextField } from '@mui/material';

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

const BookingModal = ({openBooking,handleClose, booking, date}) => {
    const {name,time} = booking;
    const handleBookSubmit = e =>{
        alert('submitting');
        handleClose();
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
                defaultValue='your name'
                size="small"
            />
            <TextField
                sx={{width:'90%', m:1}}
                id="outlined-size-small"
                defaultValue='your email'
                size="small"
            />
            <TextField
                sx={{width:'90%', m:1}}
                id="outlined-size-small"
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