import React from 'react'

function InfoCards({content,iconClass,divColor,iconColor,Number,redirect}) {
  return (
     <div className='infoCard' style={{background:divColor}} onClick={redirect}>

        <div className='infoUpper'>
           <p className='fs-5'>{content}</p>
           <i className={iconClass} style={{color:iconColor}}></i>
        </div>
        <div className='infoLower'><h2>{Number}</h2></div> 
      </div>
  )
}

export default InfoCards