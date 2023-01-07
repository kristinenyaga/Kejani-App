import React from 'react'
import Unitspecs from './unitspecs';
import './unitinfor.css'

function UnitInfor({detail,selectedCategory}){
    console.log(detail)
    const displayedUnits = detail.filter(
        (unit) => selectedCategory === "All" || unit.category === selectedCategory
      );

    return (

        <div className='units'>
        {displayedUnits.map((data) => (
            <Unitspecs key={data.id} data={data} />
        ))}
        </div>
    )
}

export default UnitInfor;