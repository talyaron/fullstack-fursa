import React from "react";
import { useState } from "react";


interface ItemProps {
    generalCart: any;
    setGeneralCart: any;
    name:string
}

function Product(prop:ItemProps) {

    const {generalCart, setGeneralCart} = prop;
    const name = prop.name;

    function removeFromCart() {
        const copy = Object.assign([], generalCart);

        if (setGeneralCart){
            copy.splice(copy.indexOf(name),1);
            setGeneralCart(copy);
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