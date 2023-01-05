import React from 'react';
import './unitDetails.css'
import { slide as Menu } from 'react-burger-menu';

function UnitDetails() {
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

      <a className="menu-item" href="/logout">
        Logout
      </a>
    </Menu>
  );
};

export default UnitDetails;