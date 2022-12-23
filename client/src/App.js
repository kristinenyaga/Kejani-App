<<<<<<< HEAD
import './App.css';
import {useEffect, useState} from 'react'
import Apartments from './components/Apartments/apartments'

function App(  ) {

  const [images, setImages] = useState([])
  const [detail, setDetails] = useState([])

  useEffect(()=>{

    fetch("/listers")
    .then((res)=>res.json())
    .then((image)=>{
      setImages(image)
    })
  }, [])

  useEffect(()=>{

    fetch("/units")
    .then((res)=>res.json())
    .then((det)=>{
      setDetails(det)
    })
  }, [])

  console.log(detail)
  console.log(images)

    // detail.map((imageArray) => (
    //     <Apartments
    //       key={imageArray}
    //       imageArray={imageArray}
    //     />
    //   ))
    

    // images.map((imageArray) => (
    //     <Apartments
    //       key={imageArray}
    //       imageArray={imageArray}
    //     />
    //   ))

    //   const imgs = images.map(img=>img.image_url)
    //   console.log(imgs)

      const det = detail.map(inf=>inf.price)
      console.log(det)
=======
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp/signup.js'
import Login from './components/Login/login';
import Homepage from './components/Homepage/homepage';

>>>>>>> d8a42d6c92b73bd23efcc4e4d895b9ee0da36875

  return (
    <>
<<<<<<< HEAD
    < Apartments images = {images} detail = {detail} det= {det} />
      {/* <ul className ='images'>
      {images.map((imgSrc, index) => (<img className= 'properties' src={imgSrc.image_url} key={index} alt="property" />))}
      <button>Detail</button>
      </ul>
      <span className ='det'>{det}</span> */}

      
    </>
  );
}
=======
   
    <Routes>
      {/* <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner"> */}
            {/* <Routes> */}
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/" element={ <Homepage />} />
>>>>>>> d8a42d6c92b73bd23efcc4e4d895b9ee0da36875

            {/* </Routes> */}
          {/* </div>
        </div>
      </div> */}
    </Routes>
    </>
    
  )
}
export default App