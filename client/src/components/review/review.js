import React from "react";
import './review.css'
import { Navigate, useNavigate} from 'react-router-dom'


function Review({rev}){
  
    console.log(rev)

    return (
      <>

      <h1 className="unitreviews">What past tenants say about the unit...</h1>
    
        <p className="det">Review: {rev.description}</p>
        
        
      </>
    )
    
}

export default Review;