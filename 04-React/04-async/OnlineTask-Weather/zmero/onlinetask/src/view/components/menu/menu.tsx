import React from 'react'
import './menu.scss'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="nav">
            <img src="https://img.icons8.com/office/30/000000/partly-cloudy-day--v1.png" />
            <Link to="/">
                Home
                    </Link>
            <Link to="/NewYork">
                NYC
                    </Link>
            <Link to="/TelAviv">
                TelAviv
                    </Link>
            <Link to="/London">
                London
                    </Link>
        </div>

    )
}

export default Menu