import React, {useEffect, useState} from 'react'
import UnitInfo from './unitInfor'

function UnitInformation(){

    const [detail, setDetails] = useState([])
  
    useEffect(()=>{
  
        fetch("/units")
        .then((res)=>res.json())
        .then((det)=>{
          setDetails(det)
        })
      }, [])
      
    console.log(detail)
    return (

        <>
        {/* <UnitInfo detail= {detail} /> */}
       <div>Hello,welcome home</div>
        </>
    )
    
}

export default UnitInformation;
