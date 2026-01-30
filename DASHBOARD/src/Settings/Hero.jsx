import React from 'react'
import { useDashBoardContext } from '../Context/DashBoardContext'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Hero() {
   
   const {setSnackBarType, setSnackBarMessage,setSnackBarOpen}=useDashBoardContext();

   const navigate=useNavigate();

  const handleLogout=()=>{

     axios.post("/api/v1/adminService/admin/logout",{withCredentials:true})
     
    .then((res)=>{
       
      setSnackBarOpen(true);
      setSnackBarMessage(res.data.message);
      setSnackBarType("success");
       navigate("/login");
    })
     
     .catch((e)=>{
          setSnackBarOpen(true);
      setSnackBarMessage(e.response.data.message);
      setSnackBarType("error");

     })
  }


  return (
   <div className='settingsHero'>
    <div>  <h2>Settings</h2>
       <p className='text-muted'>Manage your account  preferences</p></div>
     
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>

    </div>
  )
}

export default Hero