import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './unitsearch.css'
function UnitSearch( {setSearch} ){

    function handleChange(event){
     
        setSearch((event.target.value).charAt(0).toUpperCase() + (event.target.value).slice(1))
      }

    return (
        <>

   <div className='searchBar-wrap'>
      {/* <label>Filter</label>  */}

      <SearchIcon className='searchBar-icon' />
      <input
      className='filtr'
        type="text"
        placeholder="Filter by Location or Apartment type"
        onChange={(handleChange) }
      />
    </div>

        </>
    )
}

export default UnitSearch;