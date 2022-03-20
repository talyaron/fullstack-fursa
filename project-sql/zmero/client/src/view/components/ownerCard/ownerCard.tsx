import React, { useState, useEffect } from 'react'
import './ownerCard.scss'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
interface cardProp {
    id: string;
    name: string;
    image: string;
    booking: number;
    region: string;
    stars: number;
    city: string;
}

function OwnerCard(props: cardProp) {

    return (
        <Link to={`${props.id}`}>
            <div className="ownerCard">
                <div className="ownerCard__image" style={{ backgroundImage: `url(${props.image})` }}></div>
                <div className="ownerCard__main">
                    <div className="ownerCard__title">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="ownerCard__city">
                        <span>{props.city}</span>
                    </div>
                    <div>
                        <Rating style={{ color: '#FFDF32' }} name="read-only" value={props.stars} readOnly />
                    </div>
                </div>
            </div>
        </Link >
    )
}
export default OwnerCard;