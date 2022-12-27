import React from 'react'
import './apartments.css'

function Apartments( {propertyDetail} ) {

  console.log(propertyDetail)

  function formatAmount(price) {
    const amountFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    return amountFormatter.format(price);

}

  return (
    <>

      <div className ='images'>
        <div>
          <img className= 'properties'src={propertyDetail.image_url} />
        </div>
        <div>
          <p4 className='det'>Property Name: {propertyDetail.property_name}</p4>
          <p4 className='det'>Location: {propertyDetail.location}</p4>
          <p4 className='det'>Rent: { formatAmount (propertyDetail.price/100)} </p4>
          <button className='but' type='submit'>More details</button>
        </div>
      </div>

      
     

    </>
  );
}


export default Apartments;