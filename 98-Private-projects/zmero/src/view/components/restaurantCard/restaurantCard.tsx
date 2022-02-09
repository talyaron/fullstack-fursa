import React from 'react'
import Logo from './raise.svg'

interface cardProp {
    name: string;
    image: string;
    booking: number;
}

function restaurantCard(prop: cardProp) {
    return (
        <div className="restaurantCard">
            <img src={prop.image}></img>
            <h3>{prop.name}</h3>
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
    )
}
export default restaurantCard;