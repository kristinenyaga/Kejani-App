import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaCommentAlt,
    FaEnvelopeOpenText,
    FaThList,
    // FaArrowCircleLeft
} from "react-icons/fa";
import {BsFillArrowLeftCircleFill,BsArrowLeftShort,BsArrowLeftCircleFill} from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children,setInbox }) => {
    const [isOpen, setIsOpen] = useState(true);
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
        
       
    ]
const navigate=useNavigate()
    
    function handleLogout(){
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        navigate('/login')
    }
    return (
        <div className="container">
            <div  stylr={{backgroundColor:"#1A626D"}}className={` ${
          isOpen ? "w-64" : "w-20 "
        }  bg-dark-green h-screen p-5  pt-8 relative duration-300  fixed`} >
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="text-2xl font-bold text-center text-white">lister dashboard</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }}  className={`absolute cursor-pointer bg-white text-3xl text-dark-green -right-3 top-9 w-10 border-white
           border-2 rounded-full  ${!isOpen && "rotate-180"}`}>
                        <BsArrowLeftShort onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink onClick={()=>setInbox(false)} to={item.path} key={index} style={{fontFamily:"Montserrat"}}
                           className={`flex  rounded-md p-2 text-white py-11 mb-3 cursor-pointer hover:bg-dark-green hover:text-dark-green no-underline text-sm items-center gap-x-4 
                        ${item.gap ? "mt-9" : "mt-2"} ${
                          index === 0 && "bg-light-white"
                        } `} activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>

                    ))
                }
                        <button style={{fontFamily:"Montserrat"}} onClick={handleLogout} className='text-white  cursor-pointer hover:bg-dark-green hover:text-dark-green no-underline text-xl items-center gap-x-4 '><i class="fa-solid fa-delete-left ml-2 mr-2.5"></i>    Log Out</button>

            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;