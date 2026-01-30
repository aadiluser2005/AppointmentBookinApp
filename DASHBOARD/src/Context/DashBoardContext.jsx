import { createContext, useContext,useState } from "react";


export const DashBoardContext=createContext();
    


export const DashboardContextProvider=({children})=>{
   const [totalAppointments,setTotalAppointments]=useState();
   const [registeredUser,setRegisteredUser]=useState();
   const [dashBoardInfo,setDashBoardInfo]=useState({});
   const [cancellingAppointmentID,setCancellingAppointmentID]=useState();
   const[cancellingPatientName,setCancellingPatientName]=useState();
   const[cancellingPhone,setCancellingPhone]=useState();
   const[cancelOpen,setCancelOpen]=useState(false);
   const [snackBarOpen,setSnackBarOpen]=useState(false);
   const [snackBarMessage,setSnackBarMessage]=useState("");
   const [snackBarType,setSnackBarType]=useState("");
   const [userName,setUserName]=useState("");
   const [userMail,setUserMail]=useState("");
   const [activateOpen,setAcitvateOpen]=useState(false);
   const [deactivateOpen,setDeactivateOpen]=useState(false);
   const [showLoading,setShowLoading]=useState(false);

    return(
        <DashBoardContext.Provider
         value={{
              totalAppointments,
              registeredUser,
              dashBoardInfo,
              cancellingAppointmentID,
              cancellingPatientName,
               cancellingPhone,
               cancelOpen,
               snackBarOpen,
               snackBarMessage,
               snackBarType,
               userMail,
               userName,
               activateOpen,
               deactivateOpen,
               showLoading,
               setShowLoading,
               setDeactivateOpen,
               setAcitvateOpen,
               setUserName,
               setUserMail,
               setSnackBarType,
               setSnackBarMessage,
               setSnackBarOpen,
               setCancelOpen,
               setCancellingPhone,
              setCancellingPatientName,
              setCancellingAppointmentID,
              setDashBoardInfo,
              setRegisteredUser,
              setTotalAppointments
         }}
        >
            {children}
        </DashBoardContext.Provider>
    )
}


export const useDashBoardContext=()=>{
    return useContext(DashBoardContext);
}