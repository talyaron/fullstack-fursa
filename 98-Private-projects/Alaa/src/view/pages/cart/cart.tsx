import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Store from '../../pages/store/store'

interface product {
    id:number;
    name: string;
    price: number;
    quantity: number;
    description: string;
    Url: string;
    productsCart:any;
    setproductsCart:any;
}

function Cart(prop: product) { 
    const {id, name, price, quantity, description, Url } = prop;
    const { productsCart, setproductsCart } = prop;
    function remove_item() {
        let copy = Object.assign([], productsCart);
        setproductsCart(copy.filter((element: any) => {
            if (element.id != id)
                return element
        }))
    }
    
    return (

        <div className='warpper'>
            {prop.setproductsCart.map((product: product,i) => {
          const {id, name, price, quantity, description, Url,productsCart,setproductsCart } = product;
          return <Store key={i}  id={id} name={name} price={price} quantity={quantity} description={description} Url={Url} productsCart={productsCart} setproductsCart={setproductsCart} />}
        )}
            
        <div>  <Link to="/Store">Back</Link></div>

        </div>
        
    )
}


export default Cart;