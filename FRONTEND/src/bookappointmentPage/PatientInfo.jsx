import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useBooking } from '../Contexts/BookingContext';
import { useEffect } from 'react';
function PatientInfo() {
  
  const {isSlotSelected ,
    fullName,setFullName,
    phoneNumber, setPhoneNumber,
   email, setEmail,
   emergencyContact, setEmergencyContact,
   setShowConfirmation
  }=useBooking();


  const handleSubmit=(e)=>{
        e.preventDefault();
        setShowConfirmation(true);
  }

  useEffect(()=>{
  
   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
 
  },[isSlotSelected]);


  return isSlotSelected? (
    <div className='patientDiv'>
        <i class="fa-regular fa-user"></i>
        <h4>Patient Information</h4>
          <form onSubmit={handleSubmit}>
        <div className='row mt-3'>
          <div className='col-12 col-md-6 '>
            <label htmlFor='fName'>Full Name*</label> <br />
            <input type="text" class="form-control mt-2" id='fName'  required onChange={(e)=>setFullName(e.target.value)} value={fullName}></input>
          </div>
           <div className='col-12 col-md-6 '>
             <label htmlFor='phoneNumber'>Phone Number*</label> <br />
            <input type="Number" class="form-control mt-2" id='phoneNumber'  required onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber}></input>
           </div>
        </div>

         <div className='row mt-md-4'>
          <div className='col-12 col-md-6 '>
            <label htmlFor='email'>Email Address*</label> <br />
            <input type="email" class="form-control mt-2" id='email'  required onChange={(e)=>setEmail(e.target.value)} value={email}></input>
          </div>
           <div className='col-12 col-md-6'>
             <label htmlFor='emergencyContact'>Emergency Contact</label> <br />
            <input type="Number" class="form-control mt-2" id='phoneNumber'  onChange={(e)=>setEmergencyContact(e.target.value)} value={emergencyContact}></input>
           </div>
        </div>
           <button className='confirmButton'>Confirm Info</button>
        </form>
     
      

        </div>
  ):(<></>)
}

export default PatientInfo


{/* <div><button>Confirm Info</button></div> */}