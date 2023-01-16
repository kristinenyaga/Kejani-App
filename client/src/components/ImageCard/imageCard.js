import React, {useState, useEffect} from 'react'
import ApartmentCard from '../ApartmentCard/apartmentCard'
import { Navigate, useNavigate } from 'react-router-dom'

function ImageCard( {user} ){

    const [detail, setDetails] = useState([])

    const navigate = useNavigate();
  
    
    useEffect(()=>{
  
      fetch("/apartments")
      .then((res)=>res.json())
      .then((det)=>{
        setDetails(det)
      })
    }, [])
  
          
  
  return(
  <>
  
  <ApartmentCard detail= {detail} />
  
  </>
  )

}

 export default ImageCard;