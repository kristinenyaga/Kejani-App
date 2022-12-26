import React, {useState, useEffect} from 'react'
import ApartmentCard from '../ApartmentCard/apartmentCard'

function ImageCard(){

    const [images, setImages] = useState([])
    const [detail, setDetails] = useState([])
  
    useEffect(()=>{
  
      fetch("/listers")
      .then((res)=>res.json())
      .then((image)=>{
        setImages(image)
      })
    }, [])
  
    useEffect(()=>{
  
      fetch("/units")
      .then((res)=>res.json())
      .then((det)=>{
        setDetails(det)
      })
    }, [])
  
    console.log(detail)
    console.log(images)
  
  
  return(
  <>
  
  <ApartmentCard images= {images} detail= {detail} />
  </>
  )

}

 export default ImageCard;