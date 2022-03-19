import React from 'react'
import Logo from './raise.svg'
import './card.scss'
import { Link } from 'react-router-dom';

interface cardProp {
    name: string;
    image: string;
    age:number;
    level:number;
    desc: string;
}

function Card(prop: cardProp) {
    return (
        <div className="MainCard">
            <img className='imgMainCard' src={prop.image}></img>
            <p className='imgMaintxt'>
              name:  {prop.name}
                <br />
               age: {prop.age}
                <br></br>
               level: {prop.level}
                <br></br>
                {prop.desc}
            </p>
        </div>

    )
}
export default Card;