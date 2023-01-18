import React, {useState, useEffect} from 'react'
import ApartmentCard from '../ApartmentCard/apartmentCard'
import { Navigate, useNavigate } from 'react-router-dom'
import UserNav from '../userspage/usernavbar';

function ImageCard(){

    const [detail, setDetails] = useState([])

    const navigate = useNavigate();
  
    useEffect(()=>{
      fetch("/apartments", {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            Accept:'application/json',
            Authorization:`Bearer${localStorage.getItem("token")}`
        },
       
    })
      .then((res)=>res.json())
      .then((det)=>{
        setDetails(det)
      })
    }, [])
    
   
  
    console.log(detail)
  
  
  return(
  <>
  <UserNav/>
  <ApartmentCard detail= {detail} />

  </>
  )

}

 export default ImageCard;