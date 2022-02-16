import React from 'react';
import { Link } from "react-router-dom";
import "./productCard.scss";

export interface ProductProps {
    name: string;
    id: number;
    img: string;
}

function ProductCard(props: ProductProps) {
    const { name, id, img } = props;
    return (
        <Link to={`/store/${id}`}>
            <div className="card">
                <img src={img}></img>
                <span className="card__Title">{name}</span>
            </div>
        </Link>
    );
}
export default ProductCard