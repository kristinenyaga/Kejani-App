import React from "react";
import Routess from "../routes/routes";
import Sidebar from "../sidebar/sidebar";
import TopSection from "../topsection/topsection";



const Layout = () => {
  return (
    <div className="layout">
       <Sidebar />
      <div className="main__layout">
        <TopSection />

        {/* <div className="content">
         <Routess />
        </div> */}
      </div>
    </div>
  );
};

export default Layout;