import React from 'react'
import { useRef, useState } from 'react';

function UnitForm({ apartment, user }) {
  console.log(apartment)

  const [status, setStatus] = useState('');
  const [unit_url, setUnitUrl] = useState('');
  const [unit_number, setUnitNumber] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');


  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      unit_number: unit_number,
      price: price,
      category: category,
      // user_id:user.id,
      // apartment_id:apartment.id,
      image_url: unit_url
    }
    fetch('/units', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((unit) => {
            console.log(unit)
            clearData()
          }
          );
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }
  function clearData() {
    setCategory("")
    setPrice("")
    setStatus("")
    setUnitNumber("")
    setUnitUrl("")

  }

  const [errors, setErrors] = useState('');

  return (
    <>
      <div className='addapartment'>
        <h3 className='apartment-h3'><i class="fa-solid fa-house-circle-check"></i>Kejani</h3>

      </div>
      <div className="main-block">
        <h1>Add Unit</h1>
        <form className='apartment-form' onSubmit={handleSubmit} >
          {/* added ? just before username, edit out when necessary */}
          <input className="apartment-inputs red" value={user?.username} type="text" name="apartment name" placeholder="Apartment Name" disabled />
          <input className='apartment-inputs red' type="email" name="apartment type" placeholder="Apartment Type" disabled />
          <input className='apartment-inputs ' type="text" name="unit number" value={unit_number} onChange={(e) => setUnitNumber(e.target.value)} placeholder="Unit Number" />
          <input className='apartment-inputs' type="text" name="name" placeholder="Location" />
          <input className='apartment-inputs' type="text" name="name" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price" />
          <input className='apartment-inputs red' type="text" name="image url" value={unit_url} onChange={(e) => setUnitUrl(e.target.value)} placeholder="Image_url" />
          <select value={category} onChange={(e) => setCategory(e.target.value)} placeholder="u">
            <option value="number" selected>Category</option>
            <option value="bedsitters">BedSitters</option>
            <option value="studio">Studio</option>
            <option value="onebedroom">One Bedroom</option>
            <option value="twobedroom">Two Bedroom</option>
            <option value="threebedroom">Three Bedroom</option>




          </select>
          <select value={status} onChange={(e) => setStatus(e.target.value)} >
            <option value="number" selected>Status</option>
            <option value="vacant">Vacant</option>
            <option value="occuppied">Occuppied</option>

          </select>


          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </>
  )
}

export default UnitForm