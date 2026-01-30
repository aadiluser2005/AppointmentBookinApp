import './App.css'
import Appointments from './Appointments/Appointments';
import Dashboard from './Dashboard/Dashboard';
import Navbar from './Navbar/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Users from './Users/Users';
import Settings from './Settings/Settings';
import SignUp from './Signup/SignUp';
import Error from './Error/Error';


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
