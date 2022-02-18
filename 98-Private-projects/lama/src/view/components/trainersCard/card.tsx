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
                {/* <div className="Card__title"> */}
                    {prop.name}
                {/* </div>
                <div className="Card__desc"> */}
                <br />
                         {prop.desc}
        
                {/* </div> */}
            </div>
     
    )
}
export default Card;