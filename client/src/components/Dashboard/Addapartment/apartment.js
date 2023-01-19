import React from 'react'
import { useNavigate } from 'react-router-dom'

import './addapartment.css'
function Apartment({ apartment, setApartment, handleApartment }) {
  console.log(apartment)
  const navigate = useNavigate("")
  function handleUnitClick() {
    handleApartment(apartment)
    navigate('/unitform')
  }
  
  return (
    <div className='flex flex-row'>
      <div>

      <img
      className='w-64'
        src={apartment?.image_url} alt="">
      </img>

      <h3 className='font-bold text-xl' style={{fontFamily:"Montserrat"}}>
        {apartment?.apartment_name}
      </h3>
      
      <p style={{fontFamily:"Montserrat"}} className='text-dark-green'><i class="fa-solid fa-location-dot"></i>{apartment?.location}</p>
      <h4 className='font-light text-base ' style={{fontFamily:"Montserrat"}}>
        {apartment?.apartment_type}
      </h4>
      {/* <div className="postcats">
          {news.content}
        </div>
        */}
      <hr />

      <button className="section2btn" onClick={() => {

        handleApartment(apartment)
        navigate('/unitform')
      }}>Add Unit</button>

</div>

    </div>

    
  )
}

export default Apartment