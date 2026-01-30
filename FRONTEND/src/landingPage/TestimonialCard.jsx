import React from 'react'
import "./landingPage.css";

function TestimonialCard({heading,info,logo}) {
  return (
    <div className="col-3 lowerDiv">
        <div className='logo mb-2'>{logo}</div>
          
          <h3>{heading}</h3>
          <p className='mt-3'>
           {info}
          </p>
        </div>
  )
}

export default TestimonialCard