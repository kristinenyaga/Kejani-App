import React from 'react'
import './addApartment.css'
import { Navigate,useNavigate } from 'react-router-dom';

function AddApartment(){

    const navigate = useNavigate()

    return (
        <>
        <form className="field1">
            <label >Property Details</label>
            <input name='property_name' type="text" placeholder="Property Name"  />
            <input name="location" type="text" placeholder="Location" />
            <input name="price" type="number" placeholder="Price" />
            <input name="property_type" type="text" placeholder="Property type" />
            <input name="image_url" type="text" placeholder="Image url" />
            <input name="category" type="text" placeholder="Category" />
            <button type='submit' className='login-button'>Submit Data</button>

            <div><button onClick={()=>navigate('/sidebar')}>Back</button></div>
        </form>

        </>
    )
}

export default AddApartment;