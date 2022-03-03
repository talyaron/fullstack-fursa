
import React from "react";

import './Card.scss';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { input, update } from "../../features/card/CardSlice";

interface CardProps{
    imgSrc:string;
    txt:string;
}

export default function Card(Props:CardProps){
    const {imgSrc, txt} = Props;
    const dispatch = useAppDispatch();
    const textInput = useAppSelector(input)

    function handleClick() {
        dispatch(update([imgSrc,txt]))
    }
    
    return(
        <div className="card" onClick={handleClick}>
            <img src={imgSrc} alt="" />
            <h3>{txt}</h3>
            <h4>{textInput}</h4>
        </div>
    );
}