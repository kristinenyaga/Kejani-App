import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import SignUp from './components/SignUp/signup.js'
import Login from './components/Login/login';
import Homepage from './components/Homepage/homepage';
import DefaultInbox from './components/Dashboard/defaultinbox/defaultinbox'
import Sidebar from './components/Dashboard/sidebar/sidebar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Addapartment from './components/Dashboard/Addapartment/addapartment'
import Review from './components/Dashboard/Reviews/review'
import Tenants from './components/Dashboard/tenants/tenants'

import style from './App.css';
import Layout from './components/Dashboard/layout/layout';

function App() {
  const [user,setUser]=useState("")
  const [role,setRole]=useState("")
  const navigate =useNavigate("")

  function onLogin(user){
    setUser(user)
    // console.log(user)
    console.log(role)
    if(role === 'user') {
      navigate('/')
      }else if (role === 'lister'){
       navigate('/defaultinbox') 



      
      }


  }
  return (
    <>
    {
    role === 'user'?
      (<Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login onLogin={onLogin} setRole={setRole}/>} />
        <Route exact path="/" element={ <Homepage />} /> 
        </Routes>
      ):
      (
            <Layout />
      )
}
    </>  


  

    
  )
}
export default App