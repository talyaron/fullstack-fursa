import React from 'react'
import './card.scss'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { format } from 'path';
import {
    update
} from './cardSlice'


interface cardprops {
    img: string;
    text: string;
}

function Card(props: cardprops) {
    const dispatch = useAppDispatch();
    const { img, text } = props;
    function send() {
        dispatch(update({ img, text }))
    }
    return (
        <div className="card" onClick={send}>
            <img src={props.img}></img>
            <div className="text">{props.text}</div>
        </div>
    )
}
export default Card