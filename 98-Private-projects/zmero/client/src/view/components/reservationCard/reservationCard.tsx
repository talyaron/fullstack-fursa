import React, { useState, useEffect } from 'react'
import './reservationCard.scss'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { getAllRestaurants } from '../../../app/reducers/resterauntsReducer'
interface cardProp {
    id: number;
    hour: number;
    min: number;
    year: number;
    month: number;
    day: number;
    restID: number;
}

function ReservationCard(props: cardProp) {
    const restaurants = useAppSelector(getAllRestaurants)
    const restaurant = restaurants.filter((rest, index) => {
        if (rest.id === props.id)
            return rest
    })
    function CancelReserve(e: any) {
        e.preventDefault();

    }
    let img = "";
    let title = ""
    if (restaurant.length != 0) {
        img = restaurant[0].image;
        title = restaurant[0].name;
    }

    return (
        <div className="reservationcard">
            <div className="reservationcard__image" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="reservationcard__title">
                <h3>{title}</h3>
            </div>
            <div className="reservationcard__cancel">
                <button className="reservationcard__cancel__btn" onClick={CancelReserve}>Cancel</button>
            </div>

        </div>
    )
}
export default ReservationCard;