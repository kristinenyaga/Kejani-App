import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function BookUnit( {transaction, setTransaction} ){

    const [post, setPost]= useState([])
    

    const navigate = useNavigate();

   function handleBooking(){
    fetch(`/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(post),
    })
    .then(res=>res.json)
    .then((dat)=>{
        setTransaction([
            ...transaction,
            dat
        ])
    })
   }

   function handleChange(e){
    setPost({
        ...post,
        [e.target.name]: e.target.value
    })
   }
 
    return (


        <>
        <form onSubmit={handleBooking}>
          <label>Username</label>
          <input  type='text' name='username' onChange={handleChange}/>
          <label>Unit ID</label>
          <input  type='number' name='unitId' onChange={handleChange}/>
          <label>Email</label>
          <input  type='text' name='email' onChange={handleChange}/>
          <button type='submit'>Submit</button>
          <div><button className='buti' onClick={()=>navigate('/sidebar')}>Back</button></div>
        </form>
        
        </>
    )
}

export default BookUnit;

