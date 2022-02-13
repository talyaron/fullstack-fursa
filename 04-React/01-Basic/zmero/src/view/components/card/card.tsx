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
    const arrOfNames: Array<string> = ['A', 'B', 'C', 'D', 'E'];
    const [randomName, setName] = useState(arrOfNames[0]);
    function changeColor() {
        var letters = '0123456789ABCDEF';
        var newColor = '#';
        for (var i = 0; i < 6; i++) {
            newColor += letters[Math.floor(Math.random() * 16)];
        }
        setColor(newColor);

    }
    function changeName() {
        let newNum = Math.floor(Math.random() * 5)
        setName(arrOfNames[newNum])
    }


    return (
        <div className="card">
            <img src={img} alt={place} />
            <h3>{name}</h3>
            <p>Lives in: {place}</p>
            <div style={{ backgroundColor: color }} onClick={changeColor}>click on me</div>
            <div onClick={changeName}>{randomName}</div>
        </div>
    );
}

export default Card;
