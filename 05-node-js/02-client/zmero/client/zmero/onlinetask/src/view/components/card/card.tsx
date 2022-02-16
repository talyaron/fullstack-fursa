import React from 'react'
import './card.scss'
interface cardprop {
    title: string;
    img: string;
}

function Card(prop: cardprop) {
    const { img, title } = prop;
    return (
        <div className="card">
            <img src={img}></img>
            <h3>{title}</h3>
        </div>
    )
}

export default Card