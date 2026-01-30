import React from 'react'
import "./users.css"
import Hero from './Hero.jsx'
import UsersSection from './UsersSection.jsx'
import ActivateConfirm from './ActivateConfirm.jsx'
import DeactivateConfirm from './DeactivateConfirm.jsx'
import { useDashBoardContext } from '../Context/DashBoardContext.jsx'
import SnackBar from '../SnackBar/SnackBar.jsx'



function Users() {
 
   const { snackBarOpen, snackBarMessage,snackBarType,setSnackBarOpen}=useDashBoardContext();

   const handleClose=()=>{
          setSnackBarOpen(false);
      }
  return (
  <div className='usersMain'>
  <Hero></Hero>
  <UsersSection></UsersSection>
  <ActivateConfirm></ActivateConfirm>
  <DeactivateConfirm></DeactivateConfirm>
    <SnackBar open={snackBarOpen} message={snackBarMessage}  onClose={handleClose} snackbarType={snackBarType} ></SnackBar>
   
  </div>
  )
}

export default Users