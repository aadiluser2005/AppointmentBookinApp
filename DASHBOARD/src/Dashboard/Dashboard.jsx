import React from 'react'
import Chart from './Chart'
import Hero from './Hero'
import "./dashboard.css"
import { useDashBoardContext } from '../Context/DashBoardContext'
import axios from "axios"
import { useEffect } from 'react'
import SnackBar from '../SnackBar/SnackBar'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../Loading/LoadingSpinner'

function Dashboard() {
  const {setDashBoardInfo}=useDashBoardContext();

    const { snackBarOpen, snackBarMessage,snackBarType,setSnackBarOpen,showLoading,setShowLoading}=useDashBoardContext();


    const navigate=useNavigate();
     
    const handleClose=()=>{
        setSnackBarOpen(false);
    }
  

  useEffect(()=>{
    setShowLoading(true)
         axios.get("/api/v1/adminService/appointments/dashboardInfo").then((res)=>{
          console.log("dashboard print ==========",res.data);
    setDashBoardInfo(res.data.info);
      
    setShowLoading(false);

   }).catch(e=>{
      
    console.log(e);
    setShowLoading(false);
    navigate("/login");
    
   });
  },[])

   
  return( <>


  {showLoading?  (<LoadingSpinner></LoadingSpinner>):(
 <>
   <Hero></Hero>
  <Chart></Chart>
 </>
 
   
  )
}

<SnackBar open={snackBarOpen} message={snackBarMessage}  onClose={handleClose} snackbarType={snackBarType} ></SnackBar>
</>

  )
}

export default Dashboard