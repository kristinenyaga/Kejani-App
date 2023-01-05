import React from 'react';
import './sidebar.css'
import { slide as Menu } from 'react-burger-menu';

function Sidebar() {
  return (
    <Menu>
        
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/addapartment">
        Add Appartment
      </a>

      <a className="menu-item" href="/inbox">
        Inbox
      </a>

      <a className="menu-item" href="/reviewcard">
        Reviews
      </a>

      <a className="menu-item" href="/tenants">
        Tenants
      </a>

      <a className="menu-item" href="/logout">
        Logout
      </a>
    </Menu>
  );
};

export default Sidebar;