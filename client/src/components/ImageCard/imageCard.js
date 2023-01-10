import React, {useState, useEffect} from 'react'
import ApartmentCard from '../ApartmentCard/apartmentCard'
import { Navigate, useNavigate } from 'react-router-dom'

function ImageCard(){

    const [detail, setDetails] = useState([])

    const navigate = useNavigate();
  
    
    useEffect(()=>{
  
      fetch("/apartments")
      .then((res)=>res.json())
      .then((det)=>{
        setDetails(det)
      })
    }, [])
  
    console.log(detail)
  
  
  return(
  <>
  
  <ApartmentCard detail= {detail} />

  </>
  )

}

 export default ImageCard;