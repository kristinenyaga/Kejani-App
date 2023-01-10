import React from 'react'
import Apartments from '../Apartments/apartments';

function ApartmentCard({ detail }) {

    console.log(detail)

    return (

        <>
            <h1 className='section2h1'>Apartments</h1>

            {/* added ? just before detail,edit it out when necessary */}
            {detail?.map((propertyDetail) => (
                <Apartments key={propertyDetail.id} propertyDetail={propertyDetail} />
            ))}
        </>
    )
}

export default ApartmentCard;