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
        <div className="Card">
            <img src={prop.image}></img>
            <p className='txt'>
                {prop.name}
                <br />
                {prop.desc}
            </p>
        </div>

    )
}
export default Card;