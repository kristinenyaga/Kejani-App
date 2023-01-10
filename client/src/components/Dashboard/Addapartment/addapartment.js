import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Apartment from './apartment'

export default function AddApartment({ user, setApartment, apartment, handleApartment }) {
  console.log(user)


  const navigate = useNavigate("")
  function handleClick() {
    navigate('/apartmentform')
  }

  function handleUnitClick() {
    navigate('/unitform')
  }
  return (
    <div className="section2">



      <h3 className='apartment-add' onClick={handleClick}>Add apartment <i class="fa-solid fa-arrow-right-from-bracket"></i></h3>


      <div className="section2container">
        <div className="section2row">

          {/* added ? just before user, remove it when necessary */}
          {user?.apartments?.map(apartment => (
            <Apartment apartment={apartment} handleApartment={handleApartment} setApartment={setApartment} />

          ))}
          {/* {posts?.map(post => <Card details={post}/>)} */}

        </div>

      </div>
    </div>
  )
}

