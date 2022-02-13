import React from 'react'
import Logo from './raise.svg'
import './restaurantCard.scss'
import { Link } from 'react-router-dom';
interface cardProp {
    id: number;
    name: string;
    image: string;
    booking: number;
}

function restaurantCard(prop: cardProp) {
    return (
        <Link to={`/Restaurant/${prop.id}`}>
            <div className="restaurantCard">
                <img src={prop.image}></img>
                <div className="restaurantCard__title">
                    <h3>{prop.name}</h3>
                </div>
                <div className="restaurantCard__booking">
                    <img src={Logo} ></img>
                    <div className="restaurantCard__booking__title">
                        Booked {prop.booking} times today!
                </div>
                </div>
                <div className="restaurantCard__reserve">
                    <button className="restaurantCard__reserve__btn">Find next availabe</button>
                </div>
            </div>
        </Link>
    )
}
export default restaurantCard;