import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./landingPage.css";

function Testimonials() {
  return (
    <div className="container-fluid testimonial">
      <div className="upperDiv">
       
          <div className="testimonialheading text-center ">
             <h1 className="mt-5 text-muted">Why Choose DialyCare?</h1>
          </div>
         
          <div className="testimonialdesc mt-4 text-center">
            <p className="fs-4 text-muted">
              We're committed to providing exceptional dialysis care with the
              convenience and flexibility you deserve.
            </p>
          </div>
       
      </div>
      <div className="row d-flex justify-content-evenly mb-5 py-5">
        <TestimonialCard 
        logo={<i className="fa-regular fa-calendar"></i>}
        heading={"Easy Scheduling"} 
        info={"Book your dialysis sessions with just a few clicks. View available slots and choose what works best for you. "}
        ></TestimonialCard>
        
         <TestimonialCard 
         logo={<i class="fa-regular fa-clock"></i>}
        heading={"Flexible Timing"} 
        info={"Morning, afternoon, or evening slots available. We work around your schedule for consistent care. "}
        ></TestimonialCard> 
        
        <TestimonialCard 
         logo={<i class="fa-solid fa-shield"></i>}
        heading={"Safe & Sterile"} 
        info={"State-of-the-art equipment and strict hygiene protocols ensure your safety throughout treatment. "}
        ></TestimonialCard> 
        
        <TestimonialCard 
         logo={<i class="fa-regular fa-circle-user"></i>}
        heading={"Expert Care Team"} 
        info={"Our certified dialysis specialists provide personalized care and monitor your progress closely. "}
        ></TestimonialCard>
      </div>
    </div>
  );
}

export default Testimonials;
