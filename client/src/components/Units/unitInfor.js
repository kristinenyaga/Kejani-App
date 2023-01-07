import React from 'react'
import Unitspecs from './unitspecs';
import { useState } from 'react';
import './unitInformation.css'


function UnitInfor({detail}){
    console.log(detail)

    return (

        <>
        <h1 className='headerj'>Available Units</h1>
        {detail.map((data) => (
            <Unitspecs key={data.id} data={data} />
        ))}




        </>
    )
}

export default UnitInfor;