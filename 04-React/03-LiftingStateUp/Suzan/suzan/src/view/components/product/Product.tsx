import React from "react";
import { useState } from "react";


interface ProductProps {
    cart: any;
    setCart: any;
    name:string
}

function Product(prop:ProductProps) {

    const {cart, setCart} = prop;
    const name = prop.name;

    function addToCart() {
        const copy = Object.assign([], cart);

        if (setCart){
            if(!copy.includes(name)){
                copy.push(name)
                setCart(copy);
            }
        }
    }

    return(
        
        <div className="container">
            <p>{prop.name}</p>
            <button onClick={addToCart}>Add</button>
        </div>
    );
}

export default Product;