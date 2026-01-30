import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function QuickActions() {
   const navigateTo= useNavigate();

   
  const handleClick=()=>{
  
       navigateTo("/book");
  }
  return (
    <div className='quickActionSection'>
         <h3>Quick Actions</h3>
         <div className='d-flex justify-content-between quickBtn'>
         <button className='mt-3 quickBtn1 ' onClick={handleClick}><i className="fa-regular fa-calendar me-2"></i>Book New Session </button>
         <button className='mt-3  quickBtn2'> <i class="fa-solid fa-phone me-2"></i>Call Support</button>
         </div>
        
    </div>
  )
}

export default QuickActions