import React from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="nav">
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