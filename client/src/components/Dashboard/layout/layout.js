import React from "react";
import TopSection from "../topbar/topbar";

import '/home/kristine/Development/code/prodev-project/Prodev-project/client/src/components/Dashboard/sidebar/sidebar.css'
import Review from "../Reviews/review";
import Inbox from "../defaultinbox/defaultinbox";
import Tenants from "../tenants/tenants";
import AddApartment from "../Addapartment/addapartment";
import SideBarPages from "../Routes/sideBarPages";
import SideBar from "../sidebar/sidebar";

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
            <SideBar />
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