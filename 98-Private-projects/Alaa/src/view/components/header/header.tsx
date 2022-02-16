import './headerStyle.scss';
import React from "react";
import Login from '../../pages/logIn/logIn';
import { Link } from "react-router-dom";



function Header() {
  return (

    <div className="header">

      <div className='header-left'>   <a className="active" href="#home">Home</a>
      </div>
      <div className="header-right">
      <a href="#contact"></a>
      <Link to="/cart">To The Cart</Link>
        <a href="#contact">Requests</a>
        <a href="#about">Profile</a>
        <a href="#contact">Settings</a>
        <Link to="/logIn">LogOut</Link>
        <a href="#contact">Help</a>
        <a href="#about">About Us</a>
      </div>
    </div>
  );
}
export default Header;