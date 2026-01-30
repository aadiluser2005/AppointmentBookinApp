import React from 'react'
import { Link } from 'react-router-dom'
import { useBooking } from '../Contexts/BookingContext.jsx'
 
function AppointmentSection() {

  const {past}=useBooking();
  return (
    <div className='appointmentSection'>
        <i class="fa-solid fa-circle-exclamation exclamationLogo"></i>
        <h4>No {`${past?"Past":"Upcoming"}`} Appointments</h4>
        <p className='text-muted'>You don't have any scheduled dialysis sessions. Book your next appointment to continue your treatment.</p>
       <Link to={"/book"}><button className='mt-4'> <i className="fa-regular fa-calendar me-2"></i>Schedule New Appointment</button></Link> 
    </div>
  )
}

export default AppointmentSection