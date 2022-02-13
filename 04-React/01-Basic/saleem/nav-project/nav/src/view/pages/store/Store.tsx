import React from "react";
import {Outlet} from 'react-router-dom'
import {ProductProps} from './Product';
//components
import Product from "./Product";
import './store.scss';

const products = [{id:1,quantity:4,name:'Milk',price:7,src:'https://s3-us-west-2.amazonaws.com/melingoimages/Images/60691.jpg'},
 {id:2,quantity:2,name:'drink',price:14,src:'https://www.thespruceeats.com/thmb/xqOPGDFSQG00GsFRayfmbqwJv-U=/2000x2000/smart/filters:no_upscale()/watermelon-juice-recipe-to-burn-fat-2078407-hero-03-5754d230d6304eed951d94968c6173b8.jpg'},
 {id:3,quantity:1,name:'chees',price:4,src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5nlRbsFZOymta4G1pHDCYct8sUG47Et93g&usqp=CAU'}];
const Store = () => {
  return <div className="store">
      <h1>mini market</h1>
      <div className="store-products">
      {products.map((product:ProductProps, i)=>{
          return <Product key={i} name={product.name} id={product.id} quantity={product.quantity} price={product.price} src={product.src} />
      })}
      
      </div>
      <Outlet />
  </div>;
};

export default Store;
