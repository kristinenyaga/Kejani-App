import React from 'react'
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';
import Inbox from './defaultinbox';
function DefaultMap() {
  const navigate = useNavigate()
  const { user,requestedunits } = useContext(UserContext);
  console.log(user.requestunits)
  return (
    <>
    <h1 className='text-center text-3xl text-dark-green mt-1.5' style={{fontFamily:"Montserrat"}}>User Requests</h1>
     <div className='flex flex-row flex-wrap gap-20'>
      
      {user.requestunits?.map((request) => (
        <Inbox key={request.id} request={request} />
       ))}
      </div>
    </>
   
  )
}
export default DefaultMap