import { useEffect, useRef } from "react";
import { createContext, useContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [date, setDate] = useState("");
  const [slotNumber, setSlotNumber] = useState("");
  const [isDateSelected, setDateSelected] = useState(false);
  const [isSlotSelected, setSlotSelected] = useState(false);
  const [slotTime, setSlotTime] = useState("");
  const [slots, setSlots] = useState([{}]);
  const [dates, setDates] = useState([{}]);
  const [error, setError] = useState("null");
  const [open, setOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("sessionId") || false
  );
  const [snackbarType, setSnackbarType] = useState("error");
  const [appointments, setAppointments] = useState([]);
  const [past, setPast] = useState(false);
  const [upcomingLength, setUpcomingLength] = useState(0);
  const [pastLength, setPastLength] = useState(0);
  const [showConfirmation,setShowConfirmation]=useState(false);
  const [showLoading,setShowLoading]=useState(false);
  
  return (
    <BookingContext.Provider
      value={{
        fullName,
        phoneNumber,
        email,
        emergencyContact,
        date,
        slotNumber,
        isDateSelected,
        isSlotSelected,
        slotTime,
        slots,
        dates,
        error,
        open,
        userLoggedIn,
        snackbarType,
        appointments,
        past,
        upcomingLength,
        pastLength,
        showConfirmation,
        showLoading,
        setShowLoading,
        setShowConfirmation,
        setPastLength,
        setUpcomingLength,
        setPast,
        setAppointments,
        setSnackbarType,
        setFullName,
        setPhoneNumber,
        setEmail,
        setEmergencyContact,
        setDate,
        setSlotNumber,
        setDateSelected,
        setSlotSelected,
        setSlotTime,
        setSlots,
        setDates,
        setError,
        setOpen,
        setUserLoggedIn,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  return useContext(BookingContext);
};
