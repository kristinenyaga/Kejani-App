import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import './unitInformation.css'
// import { Button, size } from 'antd';
import { Link } from 'react-router-dom';


const Unitspecs = ( {data} ) => {
  const [reviews, setReview] = useState([])
  const[id,setID]=useState("")
  const navigate = useNavigate();


  function handleReviews(){
    navigate(`/data/${data.id}`)
  }
    
  function formatAmount(price) {
    const amountFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'Ksh'});
    return amountFormatter.format(price);

}
  return (
    <>

      <div className ='images'>
        <div>
          <img className= 'properties'src={data.image_url} />
        </div>
        <div className='det'>
          <p>Unit Number: {data.unit_number}</p>
          <p>Type: {data.apartment.apartment_type}</p>
          <p>Unit found in {data.apartment.apartment_name} Property</p>
          <p>Located in {data.apartment.location}</p>
          <p className='disp'>Monthly Rent: { formatAmount (data.price)} </p>
          <p>Review: {data.reviews.description}</p>
          <button className='disp' id='but' onClick={()=>navigate('/bookunit')}>Book this Unit</button>
        </div>
       
      </div>

      
     

    </>
  );
}


export default Unitspecs;