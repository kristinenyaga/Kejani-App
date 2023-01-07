import React from 'react'

function UnitSearch( {setSearch} ){

    function handleChange(event){
     
        setSearch((event.target.value).charAt(0).toUpperCase() + (event.target.value).slice(1))
      }

    return (
        <>

<div className='bar'>
      {/* <label>Filter</label>  */}
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