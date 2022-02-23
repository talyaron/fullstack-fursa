import React from 'react'
import logo from './logo.svg'

function menu() {
    return (
        <div className="navbar">
        <div className="navbar__box">
            <div className="navbar__left">
        <nav role="navigation">
                     <div id="menuToggle">
    <input type="checkbox" />  
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
      <a href="/" target="_blank"><li>Show me more</li></a>
    </ul>
  </div>
                  </nav>
                  
                <img src='https://static.dezeen.com/uploads/2019/02/new-zara-logo-hero-1.jpg' alt="Logo" />
                <a href="#home">Explore</a>
            

            </div>
            <div className="navbar__right">
                <button className="navbar__right__signup" type="button"><span>Shopping bag</span></button>
                <a href="#home">help</a>
                <button className="navbar__right__signin" type="button">Sign in</button>
            </div>
        </div>
    </div>
 
    );

}
export default menu;