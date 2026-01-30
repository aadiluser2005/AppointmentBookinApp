import './App.css'
import Appointments from './Appointments/Appointments.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Navbar from './Navbar/Navbar.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Users from './Users/Users.jsx';
import Settings from './Settings/Settings.jsx';
import SignUp from './Signup/SignUp.jsx';
import Error from './Error/Error.jsx';


function App() {

  return (
    <>

   
      
      <BrowserRouter>
       <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
         <Route path='/appointments' element={<Appointments></Appointments>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
          <Route path='/settings' element={<Settings></Settings>}></Route>
          <Route path='/login' element={<SignUp></SignUp>}></Route>
             <Route path='/*' element={<Error></Error>}></Route>
        </Routes>
        
        </BrowserRouter>

      
      
    </>
  )
}

export default App
