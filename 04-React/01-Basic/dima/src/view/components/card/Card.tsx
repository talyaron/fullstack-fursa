import { useState } from "react";

interface CardProp {
    info: {
        link: string;
        title: string;
    }
}

function Card(prop: CardProp) {
    const { link, title } = prop.info;
    
    const [color, setColor] = useState("#385c78");

    function HandleClick(ev: any) {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setColor(color);
    }

    return (
        <div className="card">
            <img src={link} />
            <h3>{title}</h3>
            <button onClick={HandleClick} style={{backgroundColor: color}}>Change color</button>
        </div>
    );
}

export default Card;