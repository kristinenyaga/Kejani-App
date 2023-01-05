import React from 'react';
import './unitDetails.css'
import { slide as Menu } from 'react-burger-menu';
import { useNavigate } from 'react-router-dom';

function UnitDetails({setUser}) {
  const navigate=useNavigate()
  function handleClick(){
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        navigate('/')
      }
    });
  }
  return (
    <Menu>
        
      <a className="menu-item" href="unitinformation">
        Additional Unit Information
      </a>

      <a className="menu-item" href="/bookunit">
        Book a unit
      </a>

      <a className="menu-item" href="/">
        Back Home
      </a>

      <a className="menu-item"  onClick={handleClick}>
        Logout
      </a>
    </Menu>
  );
};

export default UnitDetails;