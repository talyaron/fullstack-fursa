import './barStyle.scss';

import React from "react";

function Bar() {
    return (
        <div className="navbar">
            <a href="#Discount">Deals</a>
            <a href="#news">Fruits and Vegetables</a>
            <a href="#contact">Meat and fish</a>
            <a href="#about">Organic and healthy</a>
            <a href="#about">Drinks</a>
            <div className="dropdown">
                <button className="dropbtn">More
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">Frozen</a>
                    <a href="#">fresh bread</a>
                    <a href="#">Snaks and Sweets</a>
                </div>
            </div>
<div className="search_product">
<input className="searchDiv__bar__content__a__input" type="text" placeholder=" Search a product" name="search" />
</div>
        </div>


    );
}
export default Bar;