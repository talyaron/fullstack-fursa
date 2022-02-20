import React from 'react'
import Logo from './raise.svg'
import './restaurantCard.scss'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating'
interface cardProp {
    id: number;
    name: string;
    image: string;
    booking: number;
    region: string;
    stars: number;
}

function restaurantCard(prop: cardProp) {
    function openReserve(e: any) {
        e.preventDefault();

    }
    return (
        <Link to={`/Restaurant/${prop.id}`}>
            <div className="restaurantCard">
                <img src={prop.image}></img>
                <div className="restaurantCard__title">
                    <h3>{prop.name}</h3>
                </div>
                <div>
                    <Rating style={{ color: '#931b23' }} name="read-only" value={prop.stars} readOnly />
                </div>
                <div className="restaurantCard__booking">
                    <img src={Logo} ></img>
                    <div className="restaurantCard__booking__title">
                        Booked {prop.booking} times today!
                </div>
                </div>
                <div className="restaurantCard__reserve">
                    <button className="restaurantCard__reserve__btn" onClick={openReserve}>Find next availabe</button>
                </div>
            </div>
        </Link>
    )
}
export default restaurantCard;