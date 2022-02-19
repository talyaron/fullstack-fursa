import '../Cart/Cart.scss'
import { useState } from "react";
// import Cart from './view/pages/cart/Cart';
import Card from '../../components/card/Card';


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





function Cart(prop: any) {
  console.log(prop.products)
return(
    <div className="cart">
      
     {prop.products.map((product:product, i:number) => {
          const { id, name, price, quantity, description, Url, productsCart, setproductsCart } = product;
         <div>
            <img src={Url} alt="" />
          <h3>{name}</h3>
          <p>Price : {price}</p>
         </div>
        })
    }

    </div>
);
}

export default Cart;