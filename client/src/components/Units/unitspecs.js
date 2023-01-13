import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import CustomizedDialogs from '../review/dialog';
import './unitInformation.css'



const Unitspecs = ( {data,user} ) => {
  
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
    <div className="unit">
      <img className="unitImg"
      src={data.image_url} alt="">
      </img>
      <div className="unitInfo">
      <span  className="unitTitle">
      {data.apartment.apartment_name} Property
        </span>
        <div className="unitcat">
        {data.apartment.apartment_type}
        </div>
        
        <hr/>
        <span className="unitDate">{data.category}</span>
         
      </div>
      <p className="unitDesc">
      {data.occuppied}
      </p>


      <h4 className="unittitle"><i class="fa-solid fa-location-dot"></i>{data.apartment.location}</h4>
      <div className="displayflex">
       
      </div>
      <h4 className="description">Rent: { formatAmount (data.price)}</h4>
      <CustomizedDialogs title="Reviews"unit={data} user={user}/>

      <button className='mybtnn' onClick={()=>navigate('/requestunit')}>request this Unit</button>
      
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