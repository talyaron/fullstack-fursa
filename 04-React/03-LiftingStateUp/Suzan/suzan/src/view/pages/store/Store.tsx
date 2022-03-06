import React from "react";
import {Link} from 'react-router-dom';
import Product from "../../components/product/Product";

import './Store.scss';

interface storeProps {
    cart:any;
    setCart:any
}

const products = ['tshirt', 'jeans', 'coat', 'dress', 'jacket'];

export default function Store(prop:storeProps) {
    const {cart, setCart} = prop
    return(
        <div className="store">
            <h1>Store</h1>
            <div className="store__productsList">
                {
                    products.map((product, i) =>{
                        return <Product key={i} cart={cart} setCart={setCart} name={product}  ></Product>
                    })
                }
            </div>
            <Link to='/cart'><button className="cartButton">view cart</button></Link>
        </div>
    )
}