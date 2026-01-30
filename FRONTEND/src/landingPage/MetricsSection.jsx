import React from 'react'
import "./landingPage.css";

function MetricsSection() {
  return (
  <div className='container mt-5 mb-5'>
    <div className='row'>
      <div className=' col-6 col-md-3 text-center'> 
        <h1 className='fw-bold metric-num'>500+</h1>
        <p className='fs-5 text-muted'>Patients served</p>
      </div>
       <div className='col-6 col-md-3  text-center'>
        <h1  className='fw-bold metric-num'>99.9%</h1>
        <p className='fs-5 text-muted'>Uptime Reliability</p>
       </div>
        <div className='col-6 col-md-3  text-center'>
          <h1  className='fw-bold metric-num'>24/7</h1>
        <p className='fs-5 text-muted'>Emergency Support</p>
        </div>
         <div className='col-6 col-md-3 text-center'>
          <h1  className='fw-bold metric-num'>15+</h1>
        <p className='fs-5 text-muted'>Years Experience</p>
         </div>
    </div>
  </div>
  )
}

export default MetricsSection