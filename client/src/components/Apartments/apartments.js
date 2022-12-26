import React, { useState} from 'react'
import './apartments.css'

function Apartments( {propertyDetail} ) {


  function formatAmount(price) {
    const amountFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    return amountFormatter.format(price);

}

const [moreDetails, setMoreDetails] = useState()

    console.log(propertyDetail)

    

  return (
    <>

      <div className ='images'>
        <div>
          <img className= 'properties'src={propertyDetail.image_url} />
        </div>
        <div>
          <h4 className='det'>Property Name: {propertyDetail.property_name}</h4>
          <h4 className='det'>Location: {propertyDetail.location}</h4>
          <h4 className='det'>Rent: { formatAmount (propertyDetail.price/100)} </h4>
          <button className='but' type='submit'>More details</button>
        </div>
      </div>
     

    </>
  );
}


export default Apartments;