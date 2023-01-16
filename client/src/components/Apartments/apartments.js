import React from 'react'
import { useNavigate } from 'react-router';
import './apartments.css'


const Apartments = ({ propertyDetail, user }) => {

  const navigate = useNavigate();

  console.log(propertyDetail)

  function formatAmount(price) {
    const amountFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    return amountFormatter.format(price);

  }

  return (
    <>
    
      <div className="apartment">
        <img className="apartmentImg"
          src={propertyDetail.image_url} alt="">
        </img>
        <div className="apartmentInfo">
          <span className="apartmentTitle">
            {propertyDetail.apartment_name}
          </span>
          <div className="postcat">
            {propertyDetail.apartment_type}
          </div>

        </div>
        <h4 className="apartmenttitle"><i class="fa-solid fa-location-dot"></i>{propertyDetail.location}</h4>
        <button className='mybtn' onClick={() => navigate('/userspage')}>More Details...</button>
      </div>


    </>
  );
}


export default Apartments;