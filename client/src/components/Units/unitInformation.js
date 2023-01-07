import React, {useEffect, useState} from 'react'
import UnitInfor from './unitInfor'
import UnitSearch from './unitSearch'


function UnitInformation(){

    const [detail, setDetails] = useState([])
    const [search, setSearch] = useState([])
  
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
        {/* <UnitInfor detail= {detail} /> */}

        <UnitSearch setSearch = {setSearch}/>
      
        <UnitInfor 
            detail =  {detail.filter(det=>{
               if(search ===''){
                 return true;
                    }
               return (det.apartment.apartment_type).includes(search) || (det.apartment.location).includes(search);
              
      })}
      />
        
        </>
    )
    
}

export default UnitInformation;

