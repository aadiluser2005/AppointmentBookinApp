import React, { useEffect, useState } from 'react'

function DateCard({id,date,month,day,isSelected,onSelect}) {
 
  return (
     <div className ={`dateBox text-muted ${isSelected===true?'selectedDate':''}`}
     onClick={onSelect}
     >
               <h5>{day}</h5>
               <p >{date}/{month}</p>
           </div>
  )
}

export default DateCard