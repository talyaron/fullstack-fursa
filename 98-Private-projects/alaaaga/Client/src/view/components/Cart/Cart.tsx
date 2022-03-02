import '../Cart/Cart.scss'
import { useState , useEffect } from "react";
import axios from 'axios'; 

// import Cart from './view/pages/cart/Cart';
import Card from '../../components/card/Card';
import Header from '../../components/header/header';


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
  // console.log(prop.arr)

  const [allProducts,setAllProducts] = useState([]);

  const [products,setProducts]=useState([]);
  useEffect(()=>{axios.get('http://localhost:3004/products1').then(({data})=>{
  console.log(data);
  setAllProducts(data);
  const filterProducts = data.filter((product:product) =>  product.quantity>0);
  setProducts(filterProducts);
  console.log(filterProducts);
})},[]);

// const products = allProducts.filter((product:product) =>  product.quantity>0)

return(
 <div>
      <Header></Header>
      <div className="cart">
     {products.map((product:product, i:number) => {
          const { id, name, price, quantity, description, Url, productsCart, setproductsCart } = product;
          return <Card key={i} id={id} name={name} price={price} quantity={quantity} description={description} Url={Url} productsCart={productsCart} setproductsCart={setproductsCart} />
        })
    }

    </div>
    </div>
);
}

export default Cart;