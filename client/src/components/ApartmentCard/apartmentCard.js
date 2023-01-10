import React from 'react'
import Apartments from '../Apartments/apartments';
import './apartmentCard.css'

function ApartmentCard({ detail }) {

    console.log(detail)

    return (

        <>
            {/* <h1 className='section2h1'>Apartments</h1>

            {detail.map((propertyDetail) => (
                <Apartments key={propertyDetail.id} propertyDetail={propertyDetail} />
            ))}
        </>
    )
}

export default ApartmentCard;