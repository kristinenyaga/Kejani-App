import React, { useEffect, useState,useContext } from 'react'
import { useNavigate } from 'react-router';
import CustomizedDialogs from '../review/dialog';
import './unitInformation.css'
import { UserContext } from '../context/user';



const Unitspecs = ( {data,handleRequest} ) => {
  const { user } = useContext(UserContext);
  
  const [reviews, setReview] = useState('')
  const navigate = useNavigate();
  console.log(reviews)
 
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

      <button className='mybtnn' onClick={()=>{
        handleRequest(data)
        navigate('/requestunit')
        
      }}>request this Unit</button>
      
   </div>

    
     

    </>
  );
}


export default Unitspecs;