// import React from "react";

// import { NavLink } from "react-router-dom";
// import navLinks from "../assets/navLinks";
// import "./sidebar.css";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar__top">
//         <h2>
//           <span>
//             <i class="ri-taxi-line"></i>
//           </span>{" "}
//           Kejani
//         </h2>
//       </div>

//       <div className="sidebar__content">
//         <div className="menu">
//           <ul className="nav__list">
//             {navLinks.map((item, index) => (
//               <li className="nav__item" key={index}>
//                 <NavLink
//                   to={item.path}
//                   className={(navClass) =>
//                     navClass.isActive ? "nav__active nav__link" : "nav__link"
//                   }
//                 >
//                   <i className={item.icon}></i>

//                   {item.display}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="sidebar__bottom">
//           <span>
//             <i class="ri-logout-circle-r-line"></i> Logout
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaCommentAlt,
    FaEnvelopeOpenText,
    FaThList,
    // FaArrowCircleLeft
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/topsection",
            name: "Topbar",
            icon: <FaTh />
        },
        {
            path: "/addapartment",
            name: "Add Apartment",
            icon: <FaThList />
        },
        {
            path: "/reviews",
            name: "Reviews",
            icon: <FaCommentAlt />
        },
        {
            path: "/inbox",
            name: "Inbox",
            icon: <FaEnvelopeOpenText />
        },
        {
            path: "/tenants",
            name: "Tenants",
            icon: <FaUserAlt />
        },
        // {
        //     path: "/homepage",
        //     name: "Logout",
        //     icon: <FaArrowCircleLeft />
        // }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Kejani</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;