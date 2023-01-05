import React, {useEffect, useState} from 'react'
import ReviewMap from './reviewMap'


function ReviewCard(){

    const [review, setReview] = useState([])
    
    useEffect(()=>{
        fetch('/reviews')
        .then(res=>res.json())
        .then((dat)=>{
            setReview(dat)
        })
    }, [])

    console.log(review)

    return (
        <>
        <ReviewMap review={review}/>
        
        </>
    )
}

export default ReviewCard;