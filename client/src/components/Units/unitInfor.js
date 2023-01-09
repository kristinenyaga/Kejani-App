import React, { useEffect, useState } from 'react'
import Unitspecs from './unitspecs';
import './unitinfor.css'

function UnitInfor({detail,search,selectedCategory,setDetails,selectedPrice}){
    console.log(detail)
    
    const [filterdetails,setFilterDetails]=useState()
   
    
    function applyFilters(){
        let displayedUnits=detail
       
            displayedUnits = displayedUnits.filter(
                (unit) => selectedCategory === "All" || unit.category === selectedCategory
              );
    
        
       
          displayedUnits =  displayedUnits.filter(det=>{
                if(search ===''){
                  return true;
                     }
                return (det.apartment.apartment_type).includes(search) || (det.apartment.location).includes(search);
                      
              })
    
        
        const minPrice = selectedPrice[0];
        const maxPrice = selectedPrice[1];

        displayedUnits = displayedUnits.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
        );
        setDetails(displayedUnits)

    }
        useEffect(() => {
            applyFilters();
          }, [selectedCategory,search,selectedPrice]);
        
        
        


  
     

    return (

        <div className='units'>
        {detail.map((data) => (
            <Unitspecs key={data.id} data={data} />
        ))}
        </div>
    )
}

export default UnitInfor;