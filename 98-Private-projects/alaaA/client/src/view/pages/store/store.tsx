import './store.scss';
import { useState , useEffect } from 'react';
import axios from 'axios'; 
//components
import Card from '../../components/card/Card';
import Cart from '../../components/Cart/Cart';

import Bar from '../../components/productBar/bar';
import Header from '../../components/header/header';


interface product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  Url: string;
  productsCart: any;
  setproductsCart: any;
}

function Store() {

useEffect(()=>{axios.get('http://localhost:3004/products').then(({data})=>{
  console.log(data);
  setProducts(data);
})},[]);

// const products:any = axios.get('http://localhost:3004/products').then(({data})=>console.log(data));

const [products,setProducts] = useState([])
  return (

    <div className="App">
      <header className='header'> <Header></Header> </header>

      <Bar></Bar>

      <div className="wrapper">

        {products.map((product, i) => {
          const { id, name, price, quantity, description, Url, productsCart, setproductsCart } = product;
          return <Card key={i} id={id} name={name} price={price} quantity={quantity} description={description} Url={Url} productsCart={productsCart} setproductsCart={setproductsCart} />
        })}

        {/* <Cart arr={products}  /> */}
      </div>
    </div>
  );
}

export default Store;
