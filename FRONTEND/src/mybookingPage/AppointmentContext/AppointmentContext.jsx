import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [currPatientName, setCurrPatientName] = useState("");
  const [currPhoneNumber, setCurrPhoneNumber] = useState("");
  const [currAppointmentDate, setCurrAppointmentDate] = useState("");
  const [currSlotNumber, setCurrSlotNumber] = useState("");
   const [Editopen, setEditOpen] = useState(false);
   const [deleteOpen,setDeleteOpen]=useState(false);
   const [appointmentId,setAppointmentId]=useState("");
  return (
    <AppointmentContext.Provider
      value={{
        currPatientName,
        currPhoneNumber,
        currAppointmentDate,
        currSlotNumber,
        Editopen,
        appointmentId,
        deleteOpen,
        setDeleteOpen,
        setAppointmentId,
        setEditOpen,
        setCurrPatientName,
        setCurrPhoneNumber,
        setCurrAppointmentDate,
        setCurrSlotNumber,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointment=()=>{
    return useContext(AppointmentContext);
}
