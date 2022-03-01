import React, { useState, useEffect } from 'react'
import './reservationCard.scss'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { getAllRestaurants } from '../../../app/reducers/resterauntsReducer'
import { cancelReservations, fetchUserReservations } from '../../../app/reducers/reservationsReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import Button from '@mui/material/Button';
interface cardProp {
    id: string;
    hour: number;
    min: number;
    year: number;
    month: number;
    day: number;
    restId: string;
}

function ReservationCard(props: cardProp) {
    const restaurants = useAppSelector(getAllRestaurants)
    const dispatch = useAppDispatch()
    const restaurant = restaurants.filter((rest, index) => {
        if (rest.id === props.restId)
            return rest
    })
    function CancelReserve(e: any) {
        e.preventDefault();
        dispatch(cancelReservations(props.id))
    }
    let img = "";
    let title = ""
    if (restaurant.length != 0) {
        img = restaurant[0].image;
        title = restaurant[0].name;
    }
    let strDate = 'y/m/d h:t'
        .replace('y', "" + props.year)
        .replace('m', "" + props.month)
        .replace('d', "" + props.day)
        .replace('h', "" + props.hour)
        .replace('t', "" + props.min)
    return (
        <div className="reservationcard">
            <div className="reservationcard__image" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="reservationcard__main">
                <div className="reservationcard__title">
                    <h3>{title}</h3>
                </div>
                <div className="reservationcard__date">
                    <FontAwesomeIcon style={{ color: 'rgb(38, 57, 77)' }} icon={faCalendarDays} />
                    <div className="reservationcard__date__date">{strDate}</div>
                </div>
                <div className="reservationcard__cancel">
                    <Button style={{ backgroundColor: '#2a945b', width: '60%', padding: '0.1rem 0.1rem', whiteSpace: "nowrap" }} fullWidth variant="contained" onClick={CancelReserve}>Cancel</Button>
                </div>
            </div>

        </div>
    )
}
export default ReservationCard;