import React from 'react';
import './header.styles.css';
import { FaShoppingCart } from 'react-icons/fa';



const Header = ({ count }) => {
    console.log('count', count)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    
                    <div className="d-flex">
                        <button className="cart btn btn-light border border-dark" type="button">
                            <FaShoppingCart /> Cart <span className="cart-count">{count}</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;