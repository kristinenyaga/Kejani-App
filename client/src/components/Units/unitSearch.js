import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './unitsearch.css'
function UnitSearch( {setSearch,units,setUnits,newunits,search} ){

  
  
    function handleChange(event){

        setSearch((event.target.value).charAt(0).toUpperCase() + (event.target.value).slice(1))
        let displayedunits=units
        if(search !== ''){
          setUnits(
            units.filter((det) => {
              return (det.apartment.apartment_type).includes(search) || (det.apartment.location).includes(search);
            })
          );
        }
        else{
          setUnits(newunits)
          
        }
      }

    return (
      <>
       
   <div className='searchBar-wrap'>
   {/* <label>Filter</label>  */}
   <button className='text-white bg-teal-800 rounded w-24 mr-1.5 h-9'  style={{backgroundColor:"#1A626D",color:"rgb(123, 166, 173)",fontFamily: 'Montserrat'}}onClick={()=>setUnits(newunits)}>reset</button>
   
      <input
      className='filtr  rounded-lg w-80' 
        style={{backgroundColor: "#FDFBFB"}}
        type="text"
        value={search}
        placeholder="Filter by Location or Apartment type"
        onChange={(handleChange) }
      />
    </div>

        </>
    )
}

export default UnitSearch;