import React from 'react'
import Hero from './Hero.jsx'
import AppointmentsSection from './AppointmentsSection.jsx'
import "./appointment.css"
import CancelConfirm from './CancelConfirm.jsx'
import SnackBar from '../SnackBar/SnackBar.jsx'
import { useDashBoardContext } from '../Context/DashBoardContext.jsx'




function Appointments() {
     
   const { snackBarOpen, snackBarMessage,snackBarType,setSnackBarOpen}=useDashBoardContext();
       
      const handleClose=()=>{
          setSnackBarOpen(false);
      }

  return (
    <div className='appointmentMain'>
      <Hero></Hero>
      <AppointmentsSection> </AppointmentsSection>
       <CancelConfirm></CancelConfirm>
        <SnackBar open={snackBarOpen} message={snackBarMessage}  onClose={handleClose} snackbarType={snackBarType} ></SnackBar>
    </div>
  
  )
}

export default Appointments