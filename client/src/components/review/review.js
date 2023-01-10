import React from "react";
import './review.css'
import { Navigate, useNavigate} from 'react-router-dom'


function Review({rev}){

    const navigate= useNavigate()


    console.log(rev)

    return (
        <>

        <h1 className="unitreviews">Unit Reviews</h1>
      
          <p className="det">Review: {rev.description}</p>
          
        </>
    )
}

export default Review;