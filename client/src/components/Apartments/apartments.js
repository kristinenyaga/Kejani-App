import React from 'react'
import { useNavigate } from 'react-router';
import './apartments.css'


const Apartments = ( {propertyDetail} ) => {

  const navigate = useNavigate();

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
        <div className='det'>
          <div >Property Name: {propertyDetail.apartment_name}</div>
          <div >Location: {propertyDetail.location}</div>
          {/* <p4 className='det'>Rent: { formatAmount (propertyDetail.price/100)} </p4> */}
          <button id='but' type='submit' onClick={()=>navigate('/unitinformation')}>More details</button>
        </div>
      </div>

      
     

    </>
  );
}


export default Apartments;