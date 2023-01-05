import React from 'react'
import Unitspecs from './unitspecs';


function UnitInfor({detail}){

    return (

        <>
        {detail.map((data) => (
            <Unitspecs key={data.id} data={data} />
        ))}
        </>
    )
}

export default UnitInfor;