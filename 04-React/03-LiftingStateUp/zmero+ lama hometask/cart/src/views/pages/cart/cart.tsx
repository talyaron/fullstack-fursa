import React from 'react'
import CartItem from './cartItem'
import { Link } from 'react-router-dom';
interface cartprop {
    cartItems: any;
    setcartItems: any;
}

interface productprop {
    name: string;
    img: string;
    id: number;
}

function Cart(prop: cartprop) {
    console.log(prop.cartItems)
    return (
        <div>
            <Link to="/"> To Store</Link>
            <div>
                {prop.cartItems.map((product: productprop) => {
                    return <CartItem key={product.id} name={product.name} id={product.id} img={product.img} cartItems={prop.cartItems} setcartItems={prop.setcartItems} />
                })}
            </div>
        </div >
    )
}
export default Cart;