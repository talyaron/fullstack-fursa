
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Product, {productProp} from '../../components/product2/Product2' 


function Cart(){
    const {state}:any=useLocation();
    console.log(state);
    return(
        <div>cart</div>
    );

}

export default Cart;