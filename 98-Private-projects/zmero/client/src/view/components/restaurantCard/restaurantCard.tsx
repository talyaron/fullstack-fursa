import React, { useState, useEffect } from 'react'
import Logo from './raise.svg'
import './restaurantCard.scss'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating'
import ReserveModal from '../../components/reserveModal/reserveModal'
import Button from '@mui/material/Button';
interface cardProp {
    id: string;
    name: string;
    image: string;
    booking: number;
    region: string;
    stars: number;
    city: string;
}


function RestaurantCard(props: cardProp) {
    const [openModal, setOpenModal] = useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    function openReserve(e: any) {
        e.preventDefault();
        setOpenModal(true);
    }
    return (
        <Link to={`${props.id}`}>
            <div className="restaurantCard">
                <div className="reservationcard__image" style={{ backgroundImage: `url(${props.image})` }}></div>
                <div className="reservationcard__main">
                    <div className="restaurantCard__title">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="restaurantCard__city">
                        <span>{props.city}</span>
                    </div>
                    <div>
                        <Rating style={{ color: '#FFDF32' }} name="read-only" value={props.stars} readOnly />
                    </div>
                    <div className="restaurantCard__booking">
                        <img src={Logo} ></img>
                        <div className="restaurantCard__booking__title">
                            Booked {props.booking} times today!
                        </div>
                    </div>
                    <div className="restaurantCard__reserve">
                        <Button style={{ backgroundColor: '#2a945b', width: '60%', padding: '0.1rem 0.1rem', whiteSpace: "nowrap" }} variant="contained" onClick={openReserve}>Reserve Now</Button>
                    </div>
                </div>
                <ReserveModal restaurantID={props.id} openModal={openModal} setOpenModal={setOpenModal} />
            </div>
        </Link >
    )
}
export default RestaurantCard;