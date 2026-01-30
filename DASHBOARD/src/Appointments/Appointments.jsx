import React from 'react'
import Hero from './Hero'
import AppointmentsSection from './AppointmentsSection'
import "./appointment.css"
import CancelConfirm from './CancelConfirm'
import SnackBar from '../SnackBar/SnackBar'
import { useDashBoardContext } from '../Context/DashBoardContext'




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