import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import './unitInformation.css'
import { Button, size } from 'antd';
import { Link } from 'react-router-dom';


const Unitspecs = ( {data} ) => {
  const [reviews, setReview] = useState([])
  const[id,setID]=useState("")
  const navigate = useNavigate();


  function handleReviews(){
    navigate(`/data/${data.id}`)
  }
    
  function formatAmount(price) {
    const amountFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    return amountFormatter.format(price);

}
  return (
    <>

      <div className ='images'>
        <div>
          <img className= 'properties'src={data.image_url} />
        </div>
        <div>
          <p className='det'>Unit Number: {data.unit_number}</p>
          <p className='det'>Unit found in {data.apartment_name} Property</p>
          <p className='det'>Located in {data.occupied}</p>
          <p className='det'>Monthly Rent: { formatAmount (data.price/100)} </p>
          <button className='but' onClick={()=>navigate('/bookunit')}>Book this Unit</button>
          <Link to={`/data/${data.id}`}>View</Link>
        </div>
       
      </div>

      
     

    </>
  );
}


export default Unitspecs;