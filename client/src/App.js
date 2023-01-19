import React, { useEffect, useState,useContext } from 'react'
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
import RequestUnit from './components/RequestUnit/RequestUnit';

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
import Cleaners from './components/CleanersPage/cleaners.js'
import { UserContext } from './components/context/user';
import ReviewMap from './components/review/reviewMap';


export default function App() {
  // const [user, setUser] = useState("")
  // const [role, setRole] = useState("")
  const navigate = useNavigate("")
  const [lister, setLister] = useState("")
  const { user,error, role,setRole,setUser } = useContext(UserContext);
  const [requestedunit,setRequestedUnit]=useState('')


  function onLogin() {
    console.log(user)
    console.log(role)
    if (role === 'user') {
      setLister(false)
      navigate('/imagecard')

    } else if (role === 'lister') {
      //  navigate('/layout') 
       setLister(true)
      }
  }
  console.log(requestedunit)



  // useEffect(() => {
  //   const token = localStorage.token;
  //   if (typeof token !== 'undefined' && token.length > 1
  //     && token !== 'undefined'
  //   ) {
  //     fetch('/me', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },console
  //       body: JSON.stringify({ token }),
  //     })
  //       .then((r) => r.json())
  //       .then((user) => setUser(user));
  //   } else {
  //     console.log('No token found, try logging in!');
  //   }
  // }, []);


  function onSignup(){
       navigate('/login')
  }
  function handleRequest(unit){

    setRequestedUnit(unit)
 }

  const [apartment,setApartment]=useState("")
  

  return (
    <>
      {
        user ? (

          lister ? (
            <>
              <Layout user={user} setApartment={setApartment} apartment={apartment} />
              <Routes>
              <Route exact path="/reviewmap" element={ <ReviewMap user={user}/>} />
           
              </Routes>
            </>
          ) : (
            <>
            {/* <UserNavbar /> */}
            <Routes>
             <Route exact path="/imagecard" element={ <ImageCard />} />
             <Route exact path="/unitdetails" element={ <UnitDetails user={user} />} />
             <Route exact path="/unitinformation" element={ <UnitInformation />} />
             <Route exact path="/unitspecs" element={ <Unitspecs user={user} handleRequest={handleRequest}/>} />
             <Route exact path="/logout" element={ <Logout/>} />
            <Route exact path="/review" element={ <ReviewCard />} />
            <Route exact path="/requestunit" element={ <RequestUnit requestedunit={requestedunit} />} />
        
            <Route  path='/data/:id' element={<UnitReview/>} user={user}/>
            <Route  path='/userspage' element={<UsersPage handleRequest={handleRequest}/>} />

            <Route exact path="/signup" element={<SignUp onSignup={onSignup} />} />
            <Route exact path="/login" element={<Login onLogin={onLogin} setRole={setRole}/>} />
            <Route exact path="/" element={ <Homepage />} />
            <Route exact path="/contact" element={<ContactForm />} />
        <Route exact path="/movers" element={<Movers setUser={setUser} />} />
        <Route exact path="/cleaners" element={<Cleaners/>} />

            
            

              </Routes>
            </>


          )
        
          
      ):(
        <Routes>
          
        <Route exact path="/signup" element={<SignUp onSignup={onSignup} />} />
        <Route exact path="/login" element={<Login onLogin={onLogin} setRole={setRole}/>} />
        <Route exact path="/" element={ <Homepage />} />
        <Route exact path="/contact" element={<ContactForm />} />
        <Route exact path="/movers" element={<Movers />} />
        <Route exact path="/cleaners" element={<Cleaners/>} />

      </Routes>
      )
    }
    
  
    </>
  )
}

