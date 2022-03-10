import './headerStyle.scss';
import React from "react";
import Login from '../../pages/logIn/logIn';
import { Link } from "react-router-dom";



function Header() {
  return (

    <div className="header">

      <div className='header-left'> 
      </div>
      <div className="header-right">
        <a href="#contact">Requests</a>
        <a href="#about">Profile</a>
        <Link to="/settings">Settings</Link>
        <Link to="/logIn">LogOut</Link>
        <Link to="/help">help</Link>
        <Link to="/aboutUsIn">About Us</Link>
      </div>
    </div>
  );
}
export default Header;