import React from 'react';
import { Link } from "react-router-dom";
import "./productCard.scss";

export interface ProductProps {
    name: string;
    id: number;
    img: string;
}

function ProductCard(props: ProductProps) {
    const { name, id } = props;
    return (
        <div></div>
    );
}
export default ProductCard