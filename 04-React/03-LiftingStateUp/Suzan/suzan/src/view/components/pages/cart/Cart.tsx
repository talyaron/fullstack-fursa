import React from "react";

import Item from "../../item/Item";
import { useLocation } from 'react-router-dom'

interface CartProp {
    generalCart: any;
    setGeneralCart: any;
}

function Cart(prop:CartProp) {
    const {generalCart, setGeneralCart} = prop
    // const location = useLocation();
    // const {generalCart, setGeneralCart}  = location.state;
    return(
        <div>
            {
                generalCart.map((item: string, index: React.Key | null | undefined)=>{
                    return <Item key={index} name={item} generalCart={generalCart} setGeneralCart={setGeneralCart}></Item>
                })
            }
        </div>
    );
}

export default Cart;