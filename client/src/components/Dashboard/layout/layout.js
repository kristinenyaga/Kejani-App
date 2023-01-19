import React, { useState } from "react";
import TopSection from "../topbar/topbar";

import '../sidebar/sidebar.css'
import Review from "../Reviews/review";
import Inbox from "../defaultinbox/defaultinbox";
import Tenants from "../tenants/tenants";
import AddApartment from "../Addapartment/addapartment";
import SideBarPages from "../Routes/sideBarPages";
import SideBar from "../sidebar/sidebar";
import DefaultMap from "../defaultinbox/defaultmap";

const Layout = ({ user, setApartment, apartment }) => {
  const[inbox,setInbox]=useState(true)
  function handleApartment(apartment) {
    setApartment(apartment)
  }
  return (
    <React.Fragment>
      <section>
        <div>
          <TopSection user={user} />
        </div>

        <div className="w-full h-screen flex ">
          <div>
            <SideBar setInbox={setInbox} />
          </div>
          <div className="w-full h-screen">
            {inbox && <DefaultMap/>}
            <SideBarPages user={user} setApartment={setApartment} handleApartment={handleApartment} apartment={apartment} />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
};

export default Layout;