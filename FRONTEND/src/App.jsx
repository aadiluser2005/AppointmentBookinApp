
import BookingAppointment from "./bookappointmentPage/BookingAppointment.jsx";
import LandingPage from "./landingPage/LandingPage.jsx";
import MyBookingPage from "./mybookingPage/MyBookingPage.jsx";
import Navbar from "./Navbar.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignUp from "./Signup/SignUp.jsx";
import { BookingProvider } from "./Contexts/BookingContext";
import Profile from "./userProfile/Profile.jsx";
import {GoogleOAuthProvider} from "@react-oauth/google";
import Error from "./Error/Error.jsx"
import GoogleCallback from "./Signup/GoogleCallback.jsx";


export default function App() {


  const GoogleWrapper=()=>{
    return(
      <GoogleOAuthProvider clientId="541164798103-1klsgru9avdba00ff8n61lf135v59rtt.apps.googleusercontent.com">
        <SignUp></SignUp>
      </GoogleOAuthProvider>
    )
  }
return (
  <>
 <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
   
    <Route path={"/"}  element={<LandingPage></LandingPage>}></Route>
     <Route path={"/book"}  element={<BookingAppointment></BookingAppointment>}></Route>
      <Route path={"/booking"}  element={<MyBookingPage></MyBookingPage>}></Route>
      <Route path={"/login"} element={<GoogleWrapper></GoogleWrapper>}></Route>
    <Route path={"/profile"} element={<Profile></Profile>}></Route>
     <Route path="/oauth/google/callback" element={<GoogleCallback></GoogleCallback>} />
     <Route path={"/*"} element={<Error></Error>}></Route>
  </Routes>
  </BrowserRouter>
  

  </>
)
}


