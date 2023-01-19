import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AddApartment from '../Addapartment/addapartment'
import ApartmentForm from '../Addapartment/apartmentform'
import UnitForm from '../Addapartment/unitform'
import Inbox from '../defaultinbox/defaultinbox'
import DefaultMap from '../defaultinbox/defaultmap'

import Review from '../Reviews/review'
import Tenants from '../tenants/tenants'

function SideBarPages({user,setApartment,apartment,handleApartment}) {
  return (
    <section>
      <Routes>
      <Route path="/inbox" element={<DefaultMap />} />
      <Route path="/tenants" element={<Tenants />} />
      <Route path="/reviews" element={<Review/>} />
      <Route path="/addapartment" element={<AddApartment handleApartment={handleApartment} user={user} setApartment={setApartment} apartment={apartment}/>} />
      <Route path='/apartmentform' element={< ApartmentForm  user={user} />} />
      <Route path='/unitform' element={<UnitForm user={user} apartment={apartment} />} />




    
      
      </Routes>
    </section>
  )
}

export default SideBarPages