import React from 'react'
import CartItem from './cartItem'
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
            {prop.cartItems.map((product: productprop) => {
                return <CartItem key={product.id} name={product.name} id={product.id} img={product.img} cartItems={prop.cartItems} setcartItems={prop.setcartItems} />
            })}
        </div>
    )
}
export default Cart;