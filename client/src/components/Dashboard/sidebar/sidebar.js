import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaCommentAlt,
    FaEnvelopeOpenText,
    FaThList,
    FaArrowCircleLeft
} from "react-icons/fa";
import "./sidebar.css";
import { IconContext } from "react-icons";

function SideBar() {
    const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
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
            path: "/reviews",
            name: "Reviews",
            icon: <FaCommentAlt />
        },
       
        {
            path: "/tenants",
            name: "Tenants",
            icon: <FaUserAlt />
        },
        {
            path: "/logout",
            name: "Logout",
            icon: <FaArrowCircleLeft />
        }
    ]
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							
							<h2 className="sidebar_h2"><i class="fa-solid fa-house-circle-check"></i>Kejani</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
					
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ item, index }) => (
						<NavLink to={item.path} key={index}
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							
						>
							
							{isExpanded?<><p className="picon">{item.icon}</p><p className="pname">{item.name}</p></>:<p>{item.icon}</p>}
							</NavLink>
					))}
				</div>
			</div>
			
		</div>
	);
};

export default SideBar;