import React from 'react'
import logo from './logo.svg'

function menu() {
    return (
        <div className="navbar">
            <div className="navbar__box">
                <div className="navbar__left">
                    <img src={logo} alt="Logo" />
                    <a href="#home">Explore</a>
                    <a href="#Reservation">Reservation</a>
                    <a href="#Favorite">Favorite</a>
                    <a href="#Maps">Maps</a>
                </div>
                <div className="navbar__right">
                    <button className="navbar__right__signup" type="button"><span>Not Registered Yet?</span></button>
                    <button className="navbar__right__signin" type="button">Sign in</button>
                </div>
            </div>
        </div>
    );

}
export default menu;