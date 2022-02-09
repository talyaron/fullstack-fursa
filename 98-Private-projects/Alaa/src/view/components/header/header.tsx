import './headerStyle.scss';
import React from "react";

function Header() {
  return (

    <div className="header">

      <div className='header-left'>   <a className="active" href="#home">Home</a>
      </div>
      <div className="header-right">
      <a href="#contact">To The Cart</a>
        <a href="#contact">Requests</a>
        <a href="#about">Profile</a>
        <a href="#contact">Settings</a>
        <a href="#contact">LogOut</a>
        <a href="#contact">Help</a>
        <a href="#about">About Us</a>
      </div>
    </div>
  );
}
export default Header;