import React from 'react'
import { useNavigate } from 'react-router';
import './apartments.css'


const Apartments = ({ propertyDetail }) => {

  const navigate = useNavigate();

  console.log(propertyDetail)

  function formatAmount(price) {
    const amountFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    return amountFormatter.format(price);

  }

  return (
    <>
      <div className='images'>
        <div>
          <img className='properties' src={propertyDetail.image_url} />
        </div>
        <div>
          <p4 className='det'>Property Name: {propertyDetail.property_name}</p4>
          <p4 className='det'>Location: {propertyDetail.location}</p4>
          {/* <p4 className='det'>Rent: { formatAmount (propertyDetail.price/100)} </p4> */}
          <button className='but' type='submit' onClick={() => navigate('/unitinformation')}>More details</button>
        </div>
      </div>
      <h4 className="apartmenttitle"><i class="fa-solid fa-location-dot"></i>{propertyDetail.location}</h4>
      <button className='mybtn' onClick={() => navigate('/userspage')}>More Details...</button>
    </div>
     

    </>
  );
}


export default Apartments;