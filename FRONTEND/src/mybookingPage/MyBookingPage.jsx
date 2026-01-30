import React from 'react'
import Heading from './Heading';
import AppointmentTogglers from './AppointmentTogglers';
import AppointmentSection from './AppointmentSection';
import QuickActions from './QuickActions';
import "./bookingPage.css";
import { useEffect } from 'react';
import axios from 'axios'
import { useBooking } from '../Contexts/BookingContext'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppointmentCard from './AppointmentCard';
import { AppointmentProvider } from './AppointmentContext/AppointmentContext';
import AppointmentEdit from './AppointmentEdit';
import SnackBar from '../SnackBar/SnackBar';
import AppointmentDelete from './AppointmentDelete';
import LoadingSpinner from '../Loading/LoadingSpinner';




function MyBookingPage() {
 const { setDateSelected, setSlotSelected, setError,setOpen,open,error,snackbarType,setSnackbarType,appointments,setAppointments,setPastLength,setUpcomingLength,past,setPast,setShowConfirmation,showLoading}=useBooking();
//  const [appointments,setAppointments]=useState([]);
 const navigate=useNavigate();

   if(past){
        setPastLength(appointments.length);
    }else{
      setUpcomingLength(appointments.length);
    }
 

  useEffect(()=>{
      window.scrollTo(0,0);
      setPast(false);
      setDateSelected(false);
    setSlotSelected(false);
    setShowConfirmation(false);



    axios.get("/api/v1/appointmentService/appointment/upcomingAppointments",{withCredentials:true}).then((res)=>{
       setAppointments(res.data);
          
       console.log(res.data);
    }).catch(e=>{
         setSnackbarType("error");
         //console.log(e);
         setError(e.response.data.message);
         setOpen(true);
         navigate("/login");
    });
     },[]);


     
  

    
  return ( 
     
    showLoading?(<LoadingSpinner></LoadingSpinner>):(
       
      
      <div className='container-fluid bookingMain text-center'>
        <Heading></Heading>
        <AppointmentTogglers></AppointmentTogglers>
        <AppointmentProvider>
        {  appointments.length===0 ?(<AppointmentSection></AppointmentSection> ):
        (
          appointments.map((demoUser)=>(
               <AppointmentCard
            appointmentId={demoUser._id}
           patientName={demoUser.patientName}
          appointmentDate={demoUser.appointmentDate}
          dateBooked={demoUser.dateBooked}
          phoneNumber={demoUser.phoneNumber}
          bookedBy={demoUser.bookedBy}
          slotNumber={demoUser.slotNumber}
          spot={demoUser.spot}
          isActive={demoUser.confirmStatus}
           ></AppointmentCard>
          ))
          
         
          
        )}

       
        
        
        <QuickActions></QuickActions>
          <AppointmentEdit></AppointmentEdit>
          <AppointmentDelete></AppointmentDelete>
        </AppointmentProvider>
         <SnackBar open={open} message={error} onClose={() => setOpen(false)} snackbarType={snackbarType} />
    </div>



    )

  
    
    
  )
}

export default MyBookingPage