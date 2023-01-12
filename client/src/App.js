import React, {useEffect, useState} from 'react'
import './App.css';
import Apartments from './components/ApartmentCard/apartmentCard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'antd/dist/reset.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import SignUp from './components/SignUp/signup.js'
import Login from './components/Login/login';
import Homepage from './components/Homepage/homepage';
import DefaultInbox from './components/Dashboard/defaultinbox/defaultinbox'
import Addapartment from './components/Dashboard/Addapartment/addapartment'
import Review from './components/Dashboard/Reviews/review'
import Tenants from './components/Dashboard/tenants/tenants'

import style from './App.css';
import Layout from './components/Dashboard/layout/layout';
import TopSection from './components/Dashboard/topbar/topbar';
import ApartmentForm from './components/Dashboard/Addapartment/apartmentform';
import UnitForm from './components/Dashboard/Addapartment/unitform';
import Sidebar from './components/Dashboard/sidebar/sidebar';
import ImageCard from './components/ImageCard/imageCard';
import UnitDetails from './components/Units/unitDetails';
import UnitInformation from './components/Units/unitInformation';
import Unitspecs from './components/Units/unitspecs';
import Logout from './components/Logout/logout';
import ReviewCard from './components/review/reviewform';
import UnitReview from './components/unitreview/unitreview';
import UserNavbar from './components/userspage/usernavbar';
import ContactForm from './components/contact/contact';
import UsersPage from './components/userspage/userpage';
import Movers from './components/movers/movers';


export default function App() {
  const [user,setUser]=useState("")
  const [role,setRole]=useState("")
  const navigate =useNavigate("")
  const [lister,setLister]=useState("")
  function onLogin(user){
    setUser(user)
    console.log(user)
    console.log(role)
    if(role === 'user') {
      setLister(false)
      navigate('/imagecard')

      }else if (role === 'lister'){
      //  navigate('/layout') 
       setLister(true)



      
      }


  }
  const [apartment,setApartment]=useState("")
  useEffect(()=>{
    // auto-login
    fetch("/me", {
      method:'GET',
      headers: {
        "Access-Control-Allow-Origin":"no-cors",
        "Content-Type": "application/json"
      }
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  },[])
  
  return (
    <>
    {
      user?(
        
          lister?(
        <>   
          <Layout user={user} setApartment={setApartment} apartment={apartment}/>
           <Routes>
              {/* <Route exact path="/inbox" element={ <DefaultInbox />} />
              <Route exact path="/reviews" element={ <Review />} />
              <Route exact path="/addapartment" element={ <Addapartment  user={user}  />} />
              <Route exact path="/tenants" element={ <Tenants />} />
               */}
    
           </Routes>
        </>
          ):(
            <>
            {/* <UserNavbar /> */}
            <Routes>
             <Route exact path="/imagecard" element={ <ImageCard />} />
             <Route exact path="/unitdetails" element={ <UnitDetails user={user} />} />
             <Route exact path="/unitinformation" element={ <UnitInformation />} />
             <Route exact path="/unitspecs" element={ <Unitspecs user={user}/>} />
             <Route exact path="/logout" element={ <Logout/>} />
            <Route exact path="/review" element={ <ReviewCard />} />
            <Route  path='/data/:id' element={<UnitReview/>} />
            <Route  path='/userspage' element={<UsersPage/>} />

            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login onLogin={onLogin} setRole={setRole}/>} />
            <Route exact path="/" element={ <Homepage />} />
            <Route exact path="/contact" element={<ContactForm />} />
        <Route exact path="/movers" element={<Movers setUser={setUser} />} />
            
            

            </Routes>
            </>
       

          )
        
          
      ):(
        <Routes>
          
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login onLogin={onLogin} setRole={setRole}/>} />
        <Route exact path="/" element={ <Homepage />} />
        <Route exact path="/contact" element={<ContactForm />} />
        <Route exact path="/movers" element={<Movers />} />


      </Routes>
      )
    }
    
  
    </>
  )
}
  
