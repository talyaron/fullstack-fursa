import React from "react";
import {Outlet} from 'react-router-dom'
import {ProductProps} from './Product';
//components
import Product from "./Product";


const products = [{id:1,name:'Book',img:'https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg'}, {id:2,name:'House',img:'https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg'},{id:3,name:'coffee',img:'https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg'}];

const Store = () => {
  return <div>
      <h1>Store</h1>
      {products.map((product:ProductProps, i)=>{
          return <Product key={i} name={product.name} id={product.id} img={product.img} />
      })}
      <Outlet />
  </div>;
};

export default Store;
