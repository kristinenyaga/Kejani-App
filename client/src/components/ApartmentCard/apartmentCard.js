import React from 'react'
import Apartments from '../Apartments/apartments';
import './apartmentCard.css'

function ApartmentCard({ detail }) {

    

    return (

        <>
            {/* <h1 className='section2h1'>Apartments</h1>
        {detail.map((propertyDetail) => (
            <Apartments key={propertyDetail.id} propertyDetail={propertyDetail} />
        ))} */}

            <h1 className='section2h1'>Our Apartments</h1>
            <div className='flex flex-row flex-wrap m-auto ml-28'>
                {detail.map((propertyDetail) => (
                    <Apartments key={propertyDetail.id} propertyDetail={propertyDetail} />
                ))}
            </div>
        </>
    )
}

export default ApartmentCard;