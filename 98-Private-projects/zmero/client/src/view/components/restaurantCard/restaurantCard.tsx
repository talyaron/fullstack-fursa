import React, { useState, useEffect } from 'react'
import Logo from './raise.svg'
import './restaurantCard.scss'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating'
import ReserveModal from '../../components/reserveModal/reserveModal'
interface cardProp {
    id: number;
    name: string;
    image: string;
    booking: number;
    region: string;
    stars: number;
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
        <Link to={`/Restaurant/${props.id}`}>
            <div className="restaurantCard">
                <img src={props.image}></img>
                <div className="restaurantCard__title">
                    <h3>{props.name}</h3>
                </div>
                <div>
                    <Rating style={{ color: '#931b23' }} name="read-only" value={props.stars} readOnly />
                </div>
                <div className="restaurantCard__booking">
                    <img src={Logo} ></img>
                    <div className="restaurantCard__booking__title">
                        Booked {props.booking} times today!
                </div>
                </div>
                <div className="restaurantCard__reserve">
                    <button className="restaurantCard__reserve__btn" onClick={openReserve}>Find next availabe</button>
                </div>
                <ReserveModal restaurantID={props.id} openModal={openModal} setOpenModal={setOpenModal} />
            </div>
        </Link >
    )
}
export default RestaurantCard;