import React from 'react'
import { useBooking } from '../Contexts/BookingContext';
function Heading() {
   const{setSlots, setDates}=useBooking();
  return (
    <div className='container text-center '>
      <div className='headingAppointment'>
          <h1 className='fw-bold'>Schedule Your Dialysis Session</h1>
      </div>
       <div className='sessionpara text-muted'>
         Choose your preferred date and time for your next treatment
       </div>
    </div>
  )
}

export default Heading