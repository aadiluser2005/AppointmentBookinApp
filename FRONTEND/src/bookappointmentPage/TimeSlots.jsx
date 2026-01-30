import React, { useState } from "react";
import SlotCard from "./SlotCard";
import { useBooking } from "../Contexts/BookingContext";
import { useEffect } from "react";
function TimeSlots() {
  const [selectedId, setSelectedId] = useState(null);
  const times = ["10:00AM", "12:00PM", "02:00PM", "04:00PM"];
  const { isDateSelected,setSlotSelected,setSlotNumber,setSlotTime,slots } = useBooking();
  
  
const handleSelect=(id,slot)=>{
  setSelectedId(id);
  setSlotSelected(true);
  setSlotNumber(slot.toString());
  setSlotTime(times[slot-1]);
}


useEffect(()=>{
  // setTimeout(()=>{
  //  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  // },2000);
 
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
},[isDateSelected]);



  return isDateSelected ? (
    <div className="slotSection">
      <i class="fa-regular fa-clock"></i>
      <h4>Available Time Slots</h4>

      <div className="slotCards">
        {slots.map((item, index) => {
          return (
            <SlotCard
              slotNumber={item.slots}
              key={item.id}
              onSelect={() => handleSelect(item.id,index+1)}
              isSelected={selectedId === item.id}
              time={times[index]}
            ></SlotCard>
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default TimeSlots;
