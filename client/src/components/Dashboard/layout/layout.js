import React from "react";
import TopSection from "../topbar/topbar";

import '../sidebar/sidebar.css'
import Review from "../Reviews/review";
import Inbox from "../defaultinbox/defaultinbox";
import Tenants from "../tenants/tenants";
import AddApartment from "../Addapartment/addapartment";
import SideBarPages from "../Routes/sideBarPages";
import Sidebar from "../sidebar/sidebar";

const Layout = ({user,setApartment, apartment}) => {
  function handleApartment(apartment){
    setApartment(apartment)
  }
  return (
    <React.Fragment>
    <section>
      <div>
        <div>
          <TopSection user={user}/>
        </div>

        <div className="w-full h-screen flex ">
          <div>
            <Sidebar />
          </div>
          <div className="w-full h-screen">
            <SideBarPages user={user} setApartment={setApartment} handleApartment={handleApartment} apartment={apartment}/>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
  )
};

export default Layout;