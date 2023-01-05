import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import './unitInformation.css'


const Unitspecs = ( {data} ) => {

  
  const navigate = useNavigate();

  console.log(data)

  function formatAmount(price) {
    const amountFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    return amountFormatter.format(price);

}
console.log(data)
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
          <button className='but' type='submit' onClick={()=>navigate('/bookunit')}>Book this Unit</button>
        </div>
       
      </div>

      
     

    </>
  );
}


export default Unitspecs;