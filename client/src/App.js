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

export const AppContext = createContext(null);

export default function App() {
  const [user,setUser]=useState("")
  const [role,setRole]=useState("")
  const navigate =useNavigate("")
  const [lister,setLister]=useState(true)
  function onLogin(user){
    setUser(user)
    console.log(user)
    console.log(role)
    if(role === 'user') {
      // navigate('/')
      setLister(false)
      }else if (role === 'lister'){
      //  navigate('/layout') 
       setLister(true)



      
      }


  }
  const [latestPost, setLatestPost] = useState(AppContext)   
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
              <Route exact path="/inbox" element={ <DefaultInbox />} />
              <Route exact path="/reviews" element={ <Review />} />
              {/* <Route exact path="/addapartment" element={ <Addapartment  user={user}  />} /> */}
              <Route exact path="/tenants" element={ <Tenants />} />
              <Route path="/topbar" element={<TopSection />} />
      
      
           </Routes>
        </>
          ):(
        <Route exact path="/" element={ <Homepage />} />

          )
        
          
      ):(
        <Routes>

        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login onLogin={onLogin} setRole={setRole}/>} />
        <Route exact path="/" element={ <Homepage />} />
      </Routes>
      )
    }
    
  
    </>
  )
}
  
export default App