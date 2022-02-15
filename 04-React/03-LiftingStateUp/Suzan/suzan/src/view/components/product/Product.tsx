import React from "react";
import { useState } from "react";


interface ProductProps {
    generalCart: any;
    setGeneralCart: any;
    name:string
}

function Product(prop:ProductProps) {

    const {generalCart, setGeneralCart} = prop;
    const name = prop.name;

    function addToCart() {
        const copy = Object.assign([], generalCart);

        if (setGeneralCart){
            if(!copy.includes(name)){
                copy.push(name)
                setGeneralCart(copy);
            }
        }
    }

    return(
        
        <div className="container">
            <p>{prop.name}</p>
            <button onClick={addToCart}>add</button>
        </div>
    );
}

export default Product;