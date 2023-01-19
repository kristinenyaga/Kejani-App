import React from 'react'
import Form from 'react-bootstrap/Form';
import { useRef, useState,useContext } from 'react';
import { UserContext } from '../../context/user';


function UnitForm({ apartment }) {
  console.log(apartment)

  const [status, setStatus] = useState('');
  const [unit_url, setUnitUrl] = useState('');
  const [unit_number, setUnitNumber] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [apttype,setApttype] = useState('')
  const [aptname,setAptname] = useState('')



  const { user,setRole } = useContext(UserContext);



  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      unit_number: unit_number,
      price: price,
      category: category,
      user_id:user.id,
      apartment_id:apartment.id,
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
            window.alert("Data Submitted successfully")
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
    setApttype('')
    setLocation('')
    setAptname('')
    Window.alert("success")

  }

  const [errors, setErrors] = useState('');

  return (
    <>
     
      <div className="main-block">
        <h1>Add Unit</h1>
        <form className='apartment-form' onSubmit={handleSubmit} >
          {/* added ? just before username, edit out when necessary */}
          <input className="apartment-inputs red" value={user?.username} type="text" name="apartment name" placeholder="Apartment Name" onChange={(e) => setAptname(e.target.value)} />
          <input className='apartment-inputs ' type="text" name="apartment type" placeholder="Apartment Type" value={apttype} onChange={(e) => setApttype(e.target.value)}  />
          <input className='apartment-inputs ' type="text" name="unit number" value={unit_number} onChange={(e) => setUnitNumber(e.target.value)} placeholder="Unit Number" />
          <input className='apartment-inputs' type="text" name="name" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <input className='apartment-inputs' type="text" name="name" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price" />
          <input className='apartment-inputs' type="text" name="image url" value={unit_url} onChange={(e) => setUnitUrl(e.target.value)} placeholder="Image_url" />
          <Form.Select  value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="number" selected>Category</option>
            <option value="bedsitters">bedsitter</option>
            <option value="studio">Studio</option>
            <option value="onebedroom">1bedroom</option>
            <option value="twobedroom">2bedroom</option>
            <option value="threebedroom">3bedroom</option>

         </Form.Select>

          



          <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} >
            <option value="number"  selected>Status</option>
            <option value="vacant">Vacant</option>
            <option value="occuppied">Occuppied</option>

          </Form.Select>


          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </>
  )
}

export default UnitForm