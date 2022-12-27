import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp/signup.js'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/login';
import Homepage from './components/Homepage/homepage';


function App() {
  const [user, setUser] = useState(null);
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

            {/* </Routes> */}
          {/* </div>
        </div>
      </div> */}
    </Routes>
    </>
    
  )
}
export default App