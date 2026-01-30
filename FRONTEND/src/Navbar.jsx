import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useBooking } from './Contexts/BookingContext';
import { useEffect } from 'react';
import { useState } from 'react';


function Navbar() {
 const {userLoggedIn}=useBooking();
   
 
 

  // useEffect(()=>{
  
  // },[userLoggedIn]);

  //console.log(userLoggedIn);

  

   
  
  return (
    <>
     <div className='navbar fixed-top border-bottom'>
      <NavLink to={"/"} className="leftDiv-Link">
         <div className='leftDiv'>
            <div className='logo'>
           <i className="fa-regular fa-heart icon"></i></div>
            <h3 className='text-muted'>DialyCare</h3>
        </div>
      </NavLink>
       
         <div className='midDiv'>
          
            <NavLink
             to="/"
           className={   ({isActive }) =>`navlink ${ isActive ? "selected" : ""}`}
            > <i className="fa-regular fa-heart me-2"></i> Home</NavLink>
                
                 <NavLink
             to="/book"
           className={   ({isActive }) =>`navlink ${ isActive ? "selected" : ""}`}
            > <i className="fa-regular fa-calendar me-2"></i>Book Appointment</NavLink>
                

                 
                 <NavLink
             to="/booking"
           className={   ({isActive }) =>`navlink ${ isActive ? "selected" : ""}`}
            > <i className="fa-regular fa-clock me-2"></i>My Booking</NavLink>
                
         </div>


          <div className='rightDiv'>
            <NavLink to={`${userLoggedIn?'/profile':'/login'}`} className="profileNavlink">
               <div className='profile'>
                 <i className="fa-regular fa-user me-2 text-muted"></i>
                 <h5 className='text-muted'>{userLoggedIn?"Profile":"LogIn/SignUp"}</h5>
            </div>
            </NavLink>
           
          </div>

     </div>
     
      <div className='phoneNavbar fixed-top border-bottom d-md-none'>
        <div className='upper'>
      <NavLink to={"/"} className="upperleftDiv-Link">
         <div className='upperleftDiv'>
            <div className='logo'>
           <i className="fa-regular fa-heart icon"></i></div>
            <h3 className='text-muted'>DialyCare</h3>
        </div>
      </NavLink>

       <div className='upperRightDiv'>
            <NavLink to={`${userLoggedIn?'/profile':'/login'}`} className="profileNavlink">
               <div className='profile'>
               
                 <i className="fa-regular fa-user me-2 text-muted"></i>
                 <h5 className='text-muted'>{userLoggedIn?"Profile":"LogIn/SignUp"}</h5>
            </div>
            </NavLink>
           
          </div>

          </div> 
       
         <div className='lower '>
           

          
              <NavLink
             to="/"
           className={   ({isActive }) =>` first ${ isActive ? "phoneSelected" : ""}`}
            > <i className="fa-regular fa-heart me-2"></i> <span>Home</span></NavLink>
           
          

                
                   <NavLink
             to="/book"
           className={   ({isActive }) =>` second  ${ isActive ? "phoneSelected" : ""}`}
            > <i className="fa-regular fa-calendar me-2"></i> <span>Book Appointment</span></NavLink>
                
                

                  
                    <NavLink
             to="/booking"
           className={   ({isActive }) =>` third  ${ isActive ? "phoneSelected" : ""}`}
            > <i className="fa-regular fa-clock me-2"></i> <span>My Booking</span></NavLink>
                  
                 
                
         </div>


         

     </div>

     </>
  )
}

export default Navbar