import React, {useEffect, useState} from 'react'
import './App.css';
import Apartments from './components/ApartmentCard/apartmentCard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp/signup.js'
import Login from './components/Login/login';
import Homepage from './components/Homepage/homepage';
import ApartmentCard from './components/ApartmentCard/apartmentCard';
import ImageCard from './components/ImageCard/imageCard';
import Inbox from './components/Inbox/inbox';
import Sidebar from './components/Sidebar/sidebar';
import Logout from './components/Logout/logout';
import AddApartment from './components/AddApartment/addApartment';
import UnitDetails from './components/Units/unitDetails';
import UnitInformation from './components/Units/unitInformation';
import BookUnit from './components/Units/bookUnit';
import Review from './components/Reviews/review';
import {Navigate, useNavigate} from 'react-router-dom';
import ReviewCard from './components/Reviews/reviewCard';

function App() {

  const [user,setUser]=useState("")
  const [role,setRole]=useState("")
  const navigate =useNavigate("")

  function onLogin(user){
    setUser(user)
    // console.log(user)
    console.log(role)
    if(role === 'user') {
      navigate('/sidebar')
      }else if (role === 'lister'){
       navigate('/sidebar') 
      }

  }


  return (
    <> 
      <Routes>
      {/* <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner"> */}
            {/* <Routes> */}
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/login" element={<Login onLogin={onLogin} setRole={setRole}/>} />
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/" element={ <Homepage />} />
              <Route exact path="/imagecard" element={ <ImageCard />} />
              <Route exact path="/inbox" element={ <Inbox />} />
              <Route exact path="/sidebar" element={ <Sidebar />} />
              <Route exact path="/unitdetails" element={ <UnitDetails />} />
              <Route exact path="/addapartment" element={ <AddApartment />} />
              <Route exact path="/unitinformation" element={ <UnitInformation />} />
              <Route exact path="/bookunit" element={ <BookUnit />} />
              <Route exact path="/reviewcard" element={ <ReviewCard />} />
              
            {/* </Routes> */}
          {/* </div>
        </div>
      </div> */}
    </Routes>
      
    </>
  );
}
  
export default App