import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from "react";
import "./productCard.scss";

//components
//import Nav from '../../components/nav/Nav'

export interface ProductProps {
    name: string;
    id: number;
    img: string;
    text: string;
}

function ProductCard(props: ProductProps) {
    const { name, id, img, text } = props;
    let [discription, setDiscription] = useState('');
    function showText(e: any) {
        try {
            if (discription == '')
                discription = text;
            else
                discription = '';
            setDiscription(discription)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <div className="card">
                {/* <Link to={`/vitamins/${name}`}> */}
                <div className="card__item" onClick={showText}>
                    <img src={img}></img>
                    <span className="card__item__title">{name}</span>
                </div>
                {/* </Link> */}
            </div>
            <div className="card__item__text">{discription}</div>
        </div>

    )
}

export default ProductCard;