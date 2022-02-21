import React from "react";
import Rola from "../Images/Rola.jpeg";
import "./Header.scss";

function Header() {
  return (
    <div className="headero">
      <div className="header">
        <div className="menu-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <h3> Near Events </h3>
        <img src={Rola} />
      </div>

      <h3> Near Events </h3>
      <div className="flex">
      <img src={Rola} />

      </div>
    
    </div>
  );
}

export default Header;
