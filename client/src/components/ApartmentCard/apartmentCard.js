import React from 'react'
import Apartments from '../Apartments/apartments';

function ApartmentCard({detail}){

    console.log(detail)

    return (

        <>
        {detail.map((propertyDetail) => (
            <Apartments key={propertyDetail.id} propertyDetail={propertyDetail} />
        ))}
        </>
    )
}

export default ApartmentCard;