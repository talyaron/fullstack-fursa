import React from "react";
import { useState } from "react";


interface ItemProps {
    cart: any;
    setCart: any;
    name:string
}

function Product(prop:ItemProps) {

    const {cart, setCart} = prop;
    const name = prop.name;

    function removeFromCart() {
        const copy = Object.assign([], cart);

        if (setCart){
            copy.splice(copy.indexOf(name),1);
            setCart(copy);
        }
    }

    return(
        
        <div className="container">
            <p>{prop.name}</p>
            <button onClick={removeFromCart}>remove</button>
        </div>
    );
}

export default Product;