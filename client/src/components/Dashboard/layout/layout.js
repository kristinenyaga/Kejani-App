import React from "react";
import { createContext, useState } from "react";
import SideBar from "../sidebar/sidebar";
import TopSection from "../topsection/topsection.js";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import '../sidebar/sidebar.css'
import Review from "../Reviews/review";
import Inbox from "../defaultinbox/defaultinbox";
import Tenants from "../tenants/tenants";
import AddApartment from "../Addapartment/addapartment";

const Layout = () => {
  return (
    <SideBar>
      <Routes>
        <Route path="/topsection" element={<TopSection />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/addapartment" element={<AddApartment />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/tenants" element={<Tenants />} />
      </Routes>
    </SideBar>
  )
};

export default Layout;