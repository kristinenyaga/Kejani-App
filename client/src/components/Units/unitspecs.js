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
    const amountFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'Ksh'});
    return amountFormatter.format(price);

}
  return (
    <>
    <div className="post">
      <img className="postImg"
      src={data.image_url} alt="">
      </img>
      <div className="postInfo">
      <span  className="postTitle">
      {data.apartment.apartment_name} Property
        </span>
        <div className="postcat">
        {data.apartment.apartment_type}
        </div>
        
        <hr/>
        <span className="postDate">{data.category}</span>
         
      </div>
      <p className="postDesc">
      {data.occuppied}
      </p>


      <h4 className="posttitle"><i class="fa-solid fa-location-dot"></i>{data.apartment.location}</h4>
      <div className="displayflex">
       
      </div>
      <p className="description">Rent: { formatAmount (data.price)}</p>
      <button className='mybtn' onClick={()=>navigate('/bookunit')}>request this Unit</button>

   </div>

      {/* <div className ='images'>
        <div>
          <img className= 'properties'src={data.image_url} />
        </div>
        <div>
          <p className='det'>Unit Number: {data.unit_number}</p>
          <p className='det'>Found in: {data.apartment.apartment_name} Property</p>
          <p className='det'>{data.occuppied}</p>
          <p className='det'>{data.category}</p>
          <p className='det'>{data.apartment.location}</p>
          <p className='det'>{data.apartment.location}</p>
          <p className='det'>Monthly Rent: { formatAmount (data.price)} </p>
          <button className='but' onClick={()=>navigate('/bookunit')}>Book this Unit</button>
          <Link to={`/data/${data.id}`}>View</Link>
        </div>
       
      </div> */}

      
     

    </>
  );
}


export default Unitspecs;