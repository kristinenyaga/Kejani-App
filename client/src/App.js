import React, { createContext, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
//import 'antd/dist/reset.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import SignUp from './components/SignUp/signup.js'
import Login from './components/Login/login';
import Homepage from './components/Homepage/homepage';
import DefaultInbox from './components/Dashboard/defaultinbox/defaultinbox'
import Addapartment from './components/Dashboard/Addapartment/addapartment'
import Review from './components/Dashboard/Reviews/review'
import Tenants from './components/Dashboard/tenants/tenants'

import './App.css';
import Layout from './components/Dashboard/layout/layout';
import TopSection from './components/Dashboard/topbar/topbar';

export const AppContext = createContext(null);

export default function App() {
  const [user, setUser] = useState("")
  const [role, setRole] = useState("")
  const navigate = useNavigate("")

  function onLogin(user) {
    setUser(user)
    // console.log(user)
    console.log(role)
    if (role === 'user') {
      navigate('/')
    } else if (role === 'lister') {
      navigate('/layout')




    }


  }
  const [latestPost, setLatestPost] = useState(AppContext)

  return (
    <AppContext.Provider value={{ latestPost, setLatestPost }}>

      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login onLogin={onLogin} setRole={setRole} />} />
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/layout/*" element={<Layout />} />
        <Route exact path="/inbox" element={<DefaultInbox />} />
        <Route exact path="/reviews" element={<Review />} />
        <Route exact path="/addapartment" element={<Addapartment user={user} />} />
        <Route exact path="/tenants" element={<Tenants />} />
        <Route path="/topbar" element={<TopSection />} />







      </Routes>


    </AppContext.Provider>





  )
}