import React from 'react'
import './card.scss'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectCard, selectText } from './cardSlice';
import { format } from 'path';
import {
    update,
    updateInput
} from './cardSlice'


interface cardprops {
    img: string;
    text: string;
}

function Card(props: cardprops) {
    const dispatch = useAppDispatch();
    const text1 = useAppSelector(selectText)
    const { img, text } = props;
    function send() {
        dispatch(update({ img, text }))
    }
    console.log(text1)
    return (
        <div className="card" onClick={send}>
            <div>{text1}</div>
            <img src={props.img}></img>
            <div className="text">{props.text}</div>
        </div>
    )
}
export default Card