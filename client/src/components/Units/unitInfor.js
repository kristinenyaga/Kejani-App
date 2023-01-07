import React, { useEffect, useState } from 'react'
import Unitspecs from './unitspecs';
import './unitinfor.css'

function UnitInfor({detail,search,selectedCategory,setDetails}){
    console.log(detail)
    
    const [filterdetails,setFilterDetails]=useState()
   
    let displayedUnits=detail
        if(selectedCategory){
            displayedUnits = detail.filter(
                (unit) => selectedCategory === "All" || unit.category === selectedCategory
              );
    
        }
       else if(search) {
          displayedUnits =  detail.filter(det=>{
                if(search ===''){
                  return true;
                     }
                return (det.apartment.apartment_type).includes(search) || (det.apartment.location).includes(search);
                      
              })
    
        }
        
        


  
     

    return (

        <div className='units'>
        {displayedUnits.map((data) => (
            <Unitspecs key={data.id} data={data} />
        ))}
        </div>
    )
}

export default UnitInfor;