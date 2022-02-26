import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './favoriteCard.scss'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { getAllRestaurants } from '../../../app/reducers/resterauntsReducer'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import ReserveModal from '../reserveModal/reserveModal';
interface cardProp {
    id: number;
    restId: String;
}

function FavoriteCard(props: cardProp) {
    const restaurants = useAppSelector(getAllRestaurants)
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useAppDispatch()
    const restaurant = restaurants.filter((rest, index) => {
        if (rest.id == +props.restId)
            return rest
    })
    let img = "";
    let title = ""
    let city = ""
    if (restaurant.length != 0) {
        img = restaurant[0].image;
        title = restaurant[0].name;
        city = restaurant[0].city;
    }
    function openReserve() {

    }
    return (
        <Link to={`/Restaurant/${props.restId}`}>
            <div className="restaurantCard">
                <div className="reservationcard__image" style={{ backgroundImage: `url(${img})` }}></div>
                <div className="reservationcard__main">
                    <div className="restaurantCard__title">
                        <h3>{title}</h3>
                    </div>
                    <div className="restaurantCard__city">
                        <span>{city}</span>
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
export default FavoriteCard;