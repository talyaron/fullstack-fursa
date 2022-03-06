import { Link } from 'react-router-dom';
import React from 'react';
import "./productCard.scss";


export interface ProductProps {
    name: string;
    id: number;
    img: string;
    text: string;
}

function ProductCard(props: ProductProps) {
    const { name, id, img, text } = props;

    return (
        <div className="card">
            <Link to={`/sugerfree/${name}`}>
                <div className="card__item">
                    <img src={img} ></img>
                    <span className="card__item__title">{name}</span>
                </div>
            </Link>
        </div>

    )
}

export default ProductCard;