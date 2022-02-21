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

}

function Store() {

useEffect(()=>{axios.get('http://localhost:3004/products1').then(({data})=>{
  console.log(data);
  setProducts(data);
})},[]);

// const products:any = axios.get('http://localhost:3004/products').then(({data})=>console.log(data));

const [products,setProducts] = useState([])
  return (

    <div className="App">
      <header className='header'> <Header></Header> </header>

      {/* <Bar></Bar> */}

      <div className="navbar">
            <a href="#Discount">Deals</a>
            <a href="#news">Fruits and Vegetables</a>
            <a href="#contact">Meat and fish</a>
            <a href="#about">Organic and healthy</a>
            <a href="#about">Drinks</a>
            <div className="dropdown">
                <button className="dropbtn">More
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">Frozen</a>
                    <a href="#">fresh bread</a>
                    <a href="#">Snaks and Sweets</a>
                </div>
            </div>
<div className="search_product">
<input className="searchDiv__bar__content__a__input" type="text" placeholder=" Search a product" name="search" />
</div>
        </div>
      <div className="wrapper">

        {products.map((product, i) => {
          const { id, name, price, quantity, description, Url } = product;
          return <Card key={i} id={id} name={name} price={price} quantity={quantity} description={description} Url={Url} />
        })}

        {/* <Cart arr={products}  /> */}
      </div>
    </div>
  );
}

export default Store;
