import React from 'react'

function SlotCard({time,slotNumber,onSelect,isSelected}) {
  return (
    <div className={`slotBox ${isSelected?"selectedSlot":""} ${slotNumber==="0"?"disabled":""}`}  onClick={slotNumber!="0"&&onSelect}>
           <h5>{time}</h5>
        <div className={`slotNumber  ${slotNumber==="0"?"full":""}`  }
       
        
        >
            {slotNumber==="0"?"Full":`${slotNumber} spots left`}</div>
        </div>
  )
}

export default SlotCard


// {slots[0]==="0"?"Full":slots[0]}