import React from 'react'
import './Header.css'
import logoImg from './logo-removebg-preview.png' 
const Header = () => {
  return (
    <div className="Middle">
      <div className="Header">
        <div className="Header__HeadTitle"> GymFit</div>
        <div className="Header__SecondTitle"> Make the perfect body</div>
        <img src={logoImg} alt="Logo" className="HeaderImg" />
      </div>
    </div>
  );
}

export default Header;
