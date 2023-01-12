import { useRef, useState } from 'react';

import './apartmentform.css'
function ApartmentForm({ user }) {
  console.log(user)

  const [apartment_name, setApartmentName] = useState('');
  const [apartment_type, setApartmentType] = useState('');
  const [apartment_loc, setApartmentLoc] = useState('');
  const [apartment_url, setApartmentUrl] = useState('');
  const [errors, setErrors] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      apartment_name: apartment_name,
      apartment_type: apartment_type,
      location: apartment_loc,
      user_id: user.id,
      image_url: apartment_url
    }
    fetch('/apartments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((apartment) => {
            console.log(apartment)
            clearData()
          }
          );
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }
  function clearData() {
    setApartmentLoc("")
    setApartmentName("")
    setApartmentUrl("")
    setApartmentType("")

  }
  return (
    <>
      <div className='addapartment'>
        <h3 className='apartment-h3'><i class="fa-solid fa-house-circle-check"></i>Kejani</h3>

      </div>
      <div className="main-block">
        <h1>Add Apartment</h1>
        <form className='apartment-form' onSubmit={handleSubmit} >

          {/* remove the ? inserted inside values if refuses to render */}

          <input className="apartment-inputs red" value={user?.username} type="text" name="username" placeholder="UserName" disabled />
          <input className='apartment-inputs red' value={user?.email} type="email" name="email" placeholder="Email" disabled />
          <input className='apartment-inputs red' value={user?.role} type="text" name="role" placeholder="Role" disabled />
          <input className='apartment-inputs red' value={user?.phone_number} type="text" name="name" placeholder="Phone number" disabled />
          <input className='apartment-inputs' type="text" name="name" value={apartment_name} onChange={(e) => setApartmentName(e.target.value)} placeholder="Apartment Name" />
          <input className='apartment-inputs' type="text" name="name" placeholder="Location" value={apartment_loc} onChange={(e) => setApartmentLoc(e.target.value)} />
          <input className='apartment-inputs' type="text" name="name" placeholder="Image_url" value={apartment_url} onChange={(e) => setApartmentUrl(e.target.value)} />
          <select value={apartment_type} onChange={(e) => setApartmentType(e.target.value)} placeholder="u">
            <option value="number" defaultValue>Apartment Type</option>
            <option value="hostel">Hostel</option>
            <option value="residential">Residential</option>
          </select>


          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </>

  )
}

export default ApartmentForm;