
import React from 'react'
import { UserContext } from '../../context/user';
import { useState,useContext } from 'react';
import './unitreview.css'


function Review() {
  const { user} = useContext(UserContext);

  

  return (
    <>
    <h1 style={{fontFamily:"Montserrat",color:"#1A626D",margin:"0 auto"}} className='ml-24 mt-12 font-medium text-center'>Your Reviews</h1>
     <div className='flex flex-row  mt-5	'>
        
        <div>
       {/* {user?.units?.map((review) => (
      
            // <img
            // className='rounded w-8 mb-4 h-5 '
            // src={review.image_url}>
            // </img>
            ))} */}

       </div>
       <div>
           {user?.units?.map((review) => (
            
          <p className= 'reviews' style={{fontFamily:"Montserrat",color:"#1A626D"}} >Unit No. {review.unit_number} </p>
          ))}
        </div>

        <div>
          {user?.reviews?.map((review) => (
           <p className= 'reviews' style={{fontFamily:"Montserrat",color:"#1A626D"}} >: {review.description}</p>
           ))}
       </div>

            
          
        </div>
    
    </>
     
  )
}

export default Review