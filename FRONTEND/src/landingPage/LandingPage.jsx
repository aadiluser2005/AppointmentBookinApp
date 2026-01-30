import React, { useEffect } from 'react'
import Hero from './Hero'
<<<<<<< HEAD
import MetricsSection from './MetricsSection.jsx'
import Testimonials from './Testimonials.jsx'
import SessionRedirect from './SessionRedirect.jsx'
=======
import MetricsSection from './MetricsSection'
import Testimonials from './Testimonials'
import SessionRedirect from './SessionRedirect'
>>>>>>> 36bbeb9e667f8ed1f5ad855bc33b1197421cf459
import "./landingPage.css";
import { useBooking } from '../Contexts/BookingContext.jsx'
import SnackBar from '../SnackBar/SnackBar.jsx';


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
