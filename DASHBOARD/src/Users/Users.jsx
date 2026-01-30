import React from 'react'
import "./users.css"
import Hero from './Hero'
import UsersSection from './UsersSection'
import ActivateConfirm from './ActivateConfirm'
import DeactivateConfirm from './DeactivateConfirm'
import { useDashBoardContext } from '../Context/DashBoardContext'
import SnackBar from '../SnackBar/SnackBar'



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