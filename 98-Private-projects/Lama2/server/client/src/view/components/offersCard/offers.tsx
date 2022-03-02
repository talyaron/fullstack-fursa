import React from 'react'
import Logo from './raise.svg'
import './offers.scss'
import { Link } from 'react-router-dom';

interface cardProp {
    name: string;
    description: string;
    cost: string;
}

function offersCard(prop: cardProp) {
    return (
        <div className="offersCard">
        
            <p className='txt'>
                {prop.name} <br />
                <p>{prop.description}</p>
               
                {prop.cost}
            </p>
        </div>

    )
}
export default offersCard;