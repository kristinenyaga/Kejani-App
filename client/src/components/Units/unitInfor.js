import React, { useEffect, useState } from 'react'
import Unitspecs from './unitspecs';
import './unitinfor.css'
import UserNav from '../userspage/usernavbar';

function UnitInfor({detail,search,selectedCategory,setDetails,selectedPrice}){
    
    const [filterdetails,setFilterDetails]=useState()
   
    const duplicate_details=detail

    console.log(duplicate_details)
    function applyFilters(){
    let displayedUnits=detail
     
        if(selectedCategory){
            displayedUnits = displayedUnits.filter(
                (unit) =>{
                    if(selectedCategory === "All"){
                        return unit.category !== selectedCategory

                    }
                    else{
                        return unit.category === selectedCategory
                    }
                }
                       
              );
        }
             
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