import React from 'react'
import Heading from './Heading'
import DateSection from './DateSection'
import TimeSlots from './TimeSlots'
import PatientInfo from './PatientInfo'
import Confirmation from './Confirmation'
import "./bookingAppointment.css";
import { useEffect } from 'react'
import axios from 'axios'
import { useBooking } from '../Contexts/BookingContext'
import SnackBar from '../SnackBar/SnackBar'
import LoadingSpinner from '../Loading/LoadingSpinner'


function BookingAppointment() {
     const {setDates,open,error,setOpen,snackbarType,showLoading}=useBooking();
 
   useEffect(()=>{
    window.scrollTo(0,0);
   
      async function fetchDates() {
        const res=await axios.get("/api/v1/appointmentService/slots/getDates");
        setDates(res.data);
       
       // console.log(res.data);
      }
      fetchDates();

     
   },[]);
  
  return (
      
    showLoading?(
      <>
    <LoadingSpinner></LoadingSpinner> 
     <SnackBar open={open} message={error} onClose={() => setOpen(false)}  snackbarType={snackbarType}/>   </>      
    ):(
    
    <div className='container-fluid booking'>
    
    <Heading></Heading>
    <DateSection></DateSection>
    <TimeSlots></TimeSlots>
    <PatientInfo></PatientInfo>
    <Confirmation></Confirmation>

    <SnackBar open={open} message={error} onClose={() => setOpen(false)}  snackbarType={snackbarType}/>
  
   </div>)

  
  )
}

export default BookingAppointment