import React from 'react'
import { useState } from "react";
interface CardProp {
    info: {
        name: string;
        place: string;
        img: string;
    };
}
function Card(prop: CardProp) {
    const { name, place, img } = prop.info;
    const [color, setColor] = useState('red');
    function changeColor() {
        var letters = '0123456789ABCDEF';
        var newColor = '#';
        for (var i = 0; i < 6; i++) {
            newColor += letters[Math.floor(Math.random() * 16)];
        }
        setColor(newColor);

    }


    return (
        <div className="card">
            <img src={img} alt={place} />
            <h3>{name}</h3>
            <p>Lives in: {place}</p>
            <div style={{ backgroundColor: color }} onClick={changeColor}>click on me</div>
        </div>
    );
}

export default Card;
