
import React from 'react'
import { UserContext } from '../../context/user';
import { useState,useContext } from 'react';
import './unitreview.css'


function Review() {
  const { user} = useContext(UserContext);

  

  return (
    <div className= 'containe'>
       
       <div>
           {user?.units?.map((review) => (
          <h1 className= 'reviews'>Unit No. {review.unit_number} </h1>
          ))}
        </div>

        <div>
          {user?.reviews?.map((review) => (
           <h1 className= 'reviews'>: {review.description}</h1>
           ))}
       </div>

    </div>
  )
}

export default Review