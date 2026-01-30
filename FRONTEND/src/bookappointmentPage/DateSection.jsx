import React, { useEffect } from 'react'
import DateCard from './DateCard.jsx'
import { useState } from 'react';
import { useBooking } from '../Contexts/BookingContext.jsx';
import axios from 'axios';

function DateSection() {
   const [selectedId,setSelectedId]=useState(null);

   const {setDate,setDateSelected,setSlotSelected,dates,setSlots}=useBooking();
   
  

   const handleSelect=async(id,date)=>{
    setSelectedId(id);
    setDateSelected(true);
    setDate(date);
    //setSlotSelected(false);
      const res=await axios.post("/api/v1/appointmentService/slots/getSlots",{
        date:date,
      });

    setSlots(res.data);
     // console.log(res.data);
   
   }

  


   

  return (
       <div className='dateSection'>
         <i className="fa-regular fa-calendar"></i>
        <h4>Select Date</h4>
        
       <div className="dateCards">
  {dates.map((item) => {
  
    return (
      <DateCard
        key= {item.id}
        date={item.date}
        month={item.month}
        day={item.day}
        isSelected={selectedId===item.id}
        onSelect={()=>handleSelect(item.id,item.fullDate)}
      />
    );
  })}
</div>
</div>
       
   
  )
}

export default DateSection;


()=>setSelectedId(item.id)