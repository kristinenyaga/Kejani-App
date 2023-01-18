import React from 'react'
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';
import Inbox from './defaultinbox';

function DefaultMap() {
  const navigate = useNavigate()
  const { user,requestedunits } = useContext(UserContext);



  return (
    <div className='flex flex-row flex-wrap gap-20'>
    {requestedunits?.map((request) => (
      <Inbox key={request.id} request={request} />
     ))}
    </div>

  )
}

export default DefaultMap