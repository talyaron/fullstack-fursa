import React from 'react'
interface CardProp {
    info: {
        name: string;
        place: string;
        img: string;
    };
}

function Card(prop: CardProp) {
    const { name, place, img } = prop.info;

    return (
        <div className="card">
            <img src={img} alt={place} />
            <h3>{name}</h3>
            <p>Lives in: {place}</p>
        </div>
    );
}

export default Card;
