import React from 'react'
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react'
import Review from '../Reviews/review';


function UnitReview() {
const { id } = useParams();
const [reviews,setReviews]=useState('')
  useEffect(()=>{
    fetch(`/units/${id}`)
    .then(res=>res.json())
    .then((dat)=>{
        setReviews(dat.reviews)
    })
}, [])
console.log(reviews)
  return (
    <>
       {reviews.map((rev) => (
      
            <Review key={rev.id} rev={rev} />
        ))}
    </>
  )
}

export default UnitReview