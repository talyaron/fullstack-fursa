import React, { useState, useEffect } from 'react'
import Logo from './raise.svg'
import './reservationCard.scss'
import axios from 'axios'
interface cardProp {
    id: number;
    hour: number;
    min: number;
    year: number;
    month: number;
    day: number;
    restID: number;
}

interface restprop {
    id: number;
    name: string;
    image: string;
}

function ReservationCard(props: cardProp) {
    const [openModal, setOpenModal] = useState(false);
    const [rest, setRest] = useState([{ image: "", name: "" }])
    function CancelReserve(e: any) {
        e.preventDefault();
        console.log(rest)
    }
    return (
        <div className="reservationCard">
            <img src=""></img>
            <div className="reservationCard__title">
                <h3></h3>
            </div>
            <div className="reservationCard__cancel">
                <button className="restaurantCard__reserve__btn" onClick={CancelReserve}>Cancel</button>
            </div>

        </div>
    )
}
export default ReservationCard;