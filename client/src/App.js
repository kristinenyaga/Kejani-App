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

function App() {


  return (
    <> 
      <Routes>
      {/* <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner"> */}
            {/* <Routes> */}
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/" element={ <Homepage />} />
              <Route exact path="/imagecard" element={ <ImageCard />} />
              <Route exact path="/inbox" element={ <Inbox />} />
              
          

            {/* </Routes> */}
          {/* </div>
        </div>
      </div> */}
    </Routes>
      
    </>
  );
}
  
export default App