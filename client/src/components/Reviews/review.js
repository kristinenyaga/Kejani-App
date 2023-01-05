import React from "react";
import './review.css'
import { Navigate, useNavigate} from 'react-router-dom'


function Review({rev}){

    const navigate= useNavigate()


    console.log(rev)

    return (
        <>
          <p className="det">Review: {rev.description}</p>
          <p>Review for Unit ID: {rev.unit_id}</p>
          <p>Reviewer ID: {rev.user_id}</p>
         
        </>
    )
}

export default Review;