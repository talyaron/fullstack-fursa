import React from 'react'
import './menu.scss'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="header">
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