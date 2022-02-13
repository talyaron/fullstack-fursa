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
    function add_item() {
        //console.log(id)
    }
    return (
        <div className="card">
            <img src={img}></img>
            <span className="card__Title">{name}</span>
            <button onClick={add_item}>add</button>
        </div>
    );
}
export default ProductCard