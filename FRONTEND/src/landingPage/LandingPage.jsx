import React, { useEffect } from 'react'
import Hero from './Hero'
import MetricsSection from './MetricsSection'
import Testimonials from './Testimonials'
import SessionRedirect from './sessionRedirect'
import "./landingPage.css";
import { useBooking } from '../Contexts/BookingContext'
import SnackBar from '../SnackBar/SnackBar';


function LandingPage() {

  
  const { setDateSelected, setSlotSelected,setOpen,open,error,snackbarType,setShowConfirmation}=useBooking();

     

  useEffect(()=>{
      window.scrollTo(0,0);
      setDateSelected(false);
    setSlotSelected(false);
    setShowConfirmation(false);
    
     },[]);


   
 
  return (
    <>
    <Hero></Hero>
    <MetricsSection></MetricsSection>
    <Testimonials></Testimonials>
    <SessionRedirect></SessionRedirect>
    <SnackBar open={open} message={error} onClose={() => setOpen(false)} snackbarType={snackbarType} />
    </>
  );
}

export default LandingPage;