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
				path: "/inbox",
				name: "Inbox",
				icon: <FaEnvelopeOpenText />
		  },
        {
            path: "/addapartment",
            name: "Add Apartment",
            icon: <FaThList />
        },
				{
					path: "/tenants",
					name: "Tenants",
					icon: <FaUserAlt />
			 },
        {
            path: "/reviews",
            name: "Reviews",
            icon: <FaCommentAlt />
        }
       
        
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