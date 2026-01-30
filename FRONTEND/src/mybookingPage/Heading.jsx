import React from 'react'

function Heading() {
  return (
    <div className='container text-center '>
      <div className='headingMain'>
          <h1 className='text-muted fw-semibold'>My Dialysis Sessions</h1>
      </div>
       <div className='sessionpara'>
         Manage your upcoming appointments and view your treatment history
       </div>
    </div>
  )
}

export default Heading