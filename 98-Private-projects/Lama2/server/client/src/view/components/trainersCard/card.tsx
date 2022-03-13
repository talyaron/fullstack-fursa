import React from 'react'
import Logo from './raise.svg'
import './card.scss'
import { Link } from 'react-router-dom';

interface cardProp {
    name: string;
    image: string;
    desc: string;
}

function Card(prop: cardProp) {
    return (
        <div className="MainCard">
            <img className='imgMainCard' src={prop.image}></img>
            <p className='imgMaintxt'>
                {prop.name}
                <br />
                {prop.desc}
            </p>
        </div>

    )
}
export default Card;