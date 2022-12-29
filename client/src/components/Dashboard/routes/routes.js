import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Addapartment from "../Addapartment/addapartment";
import DefaultInbox from "../defaultinbox/defaultinbox";
import Review from "../Reviews/review";
import Tenants from "../tenants/tenants";



const Routess = () => {
  return (
    <Routes>
      <Route
        exact path="/defaultinbox"
        element={<Navigate to="/defaultinbox" element={DefaultInbox} />}
      />
      <Route path="/reviews" element={<Review />} />
      <Route path="/apartments" element={<Addapartment />} />
      <Route path="/tenants" element={<Tenants />} />
    </Routes>
  );
};

export default Routess