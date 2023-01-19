import React from "react";
import {
    FaUser
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./topbar.css";

const TopSection = ( {user} ) => {
    return (
        <div className="top_nav ">
            <div className="topnav-flex ">
            <h1 className="topnav-h1 "><i class="fa-solid fa-house-circle-check"></i>Kejani</h1>
            {/* <h1 className="listers_h1">Lister's Page</h1> */}
            <div className="user-flex">
           
            <h3 className=" text-xl" style={{fontFamily:"Montserrat"}}><i class="fa-solid fa-user"></i>{user.username}</h3>
            </div>
            </div>
            
        </div>
    );
};

export default TopSection;