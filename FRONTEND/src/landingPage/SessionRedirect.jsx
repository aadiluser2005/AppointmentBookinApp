import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";
function SessionRedirect() {
  return (
    <div className="container-fluid mt-5 sessionContainer">
      
        <div className=" main text-center  session">
          <h1 className="fw-semibold text-muted">Ready to Schedule Your Next Session?</h1>
        
            <p  className="fs-4 sessionpara text-muted">
               Take control of your dialysis schedule. Book your next appointment
            in less than 2 minutes.
            </p>
           
          
          <Link to={"/book"}> <button className="fs-5 mb-3"><i className="fa-regular fa-calendar me-2"></i>Get Started Now</button></Link>
          
        </div>
      
    </div>
  );
}

export default SessionRedirect;
