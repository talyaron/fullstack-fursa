import React from 'react';
import { Link } from "react-router-dom";
import "./productCard.scss";

export interface ProductProps {
    name: string;
    id: number;
    img: string;
    cartItems: any;
    setcartItems: any;
}

function ProductCard(props: ProductProps) {
    const { name, id, img } = props;
    const { cartItems, setcartItems } = props;
    function add_item() {
        let copy = Object.assign([], cartItems);
        copy.push({ name: name, id: id, img: img })
        setcartItems(copy)
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