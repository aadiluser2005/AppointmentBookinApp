import React, { useState } from 'react'
import { useBooking } from '../Contexts/BookingContext.jsx'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Profile() {
    const {setUserLoggedIn,setError,setOpen,setSnackbarType}=useBooking();
    const navigate=useNavigate();

    const handleLogOut=async()=>{
        localStorage.removeItem("sessionId");
        setUserLoggedIn(false);
       axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/userService/user/logout`,{withCredentials:true}).then((res)=>{
        setSnackbarType("info");
         setError(res.data.message);
        setOpen(true);
        navigate("/");
      
       }).catch(e=>{
         setSnackbarType("error");
       setError(e.response.data.message);
        setOpen(true);
        navigate("/");
       })
       //console.log(localStorage.getItem("sessionId"))
    }

     const [userInfo,setUserInfo]=useState({});
 

       useEffect(()=>{
         
           
               axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/userService/user/userInfo`,{withCredentials:true}).then((res)=>{
                setUserInfo(res.data.userInfo);
               }).catch(e=>{
                setSnackbarType("error");
                 setOpen(true);
                 setError(e.response.data.message);
                  navigate("/login");
               })

              

           ;
            
          
       },[]);

  return (
  
    <div className='container profileContainer'>
     
   
    <label htmlFor='fullName' className='me-4'>Full Name:</label>
<input type='text' name='fullName' readOnly placeholder='Full Name' value={userInfo.fullName} />

 
 <br />
<label htmlFor='userName' className='me-3 mt-3'>Email :</label>
<input type='text' name='userName' readOnly placeholder='User Email' className='mt-md-3'  value={userInfo.email} />


   <br />
   
    <button onClick={handleLogOut} className='mt-5'>LogOut</button>
   
  </div>


  
)
}

export default Profile;