import React from 'react'
import "./bookingPage.css";

function EditSlots({time,slotNumber,onSelect,isSelected}) {
//  console.log(slotNumber);
  return (
    <div className={`editSlotBox ${isSelected?"editSelectedSlot":""} ${slotNumber==="0"?"editDisabled":""}`}  onClick={slotNumber!=="0" && onSelect}>
           <h5>{time}</h5>
        <div className={`editSlotNumber  ${slotNumber==="0"?"editFull":""}`}
         
       
        >
            {slotNumber==="0"?"Full":`${slotNumber} spots left`}</div>
        </div>
  )
}

export default EditSlots