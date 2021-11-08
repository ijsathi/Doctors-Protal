import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Appointments = ({date}) => {
    const {user} = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() =>{
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[date])
    return (
        <div>
            <h1>Appointment: {appointments.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{ }} aria-label="Appointments table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Time</TableCell>
                    <TableCell align="right">Service</TableCell>
                    <TableCell align="right">Action</TableCell></TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.patientName}
                      </TableCell>
                      <TableCell align="right">{row.time}</TableCell>
                      <TableCell align="right">{row.serviceName}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      </TableRow>
                  ))}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;