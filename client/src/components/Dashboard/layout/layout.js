import React from "react";
import { createContext, useState } from "react";
import SideBar from "../sidebar/sidebar";
import TopSection from "../topbar/topbar";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import '../sidebar/sidebar.css'
import Review from "../Reviews/review";
import Inbox from "../defaultinbox/defaultinbox";
import Tenants from "../tenants/tenants";
import AddApartment from "../Addapartment/addapartment";
import SideBarPages from "../Routes/sideBarPages";

const Layout = ({ user, setApartment, apartment }) => {
  function handleApartment(apartment) {
    setApartment(apartment)
  }
  return (
    <React.Fragment>
      <section>
        <div>
          <div>
            <TopSection />
          </div>

          <div className="w-full h-screen flex ">
            <div>
              <SideBar />
            </div>
            <div className="w-full h-screen">
              <SideBarPages user={user} setApartment={setApartment} handleApartment={handleApartment} apartment={apartment} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
};

export default Layout;