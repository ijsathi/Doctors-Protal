import React from 'react';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailabeAppointment from '../AvailabeAppointment/AvailabeAppointment';

const Appoinment = () => {
    const [date , setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader  date={date} setDate={setDate}></AppointmentHeader>
            <AvailabeAppointment  date={date} setDate={setDate}></AvailabeAppointment>
        </div>
    );
};

export default Appoinment;