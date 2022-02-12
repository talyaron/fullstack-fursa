import React from "react";
import {Outlet} from 'react-router-dom'
import {ProductProps} from './Product';
//components
import Product from "./Product";


const products = [{id:1,name:'cattle'}, {id:2,name:'finjan'},{id:3,name:'coffee'}];

const Store = () => {
  return <div className="container">
    <div className="container__left">
      <h1>Store</h1>
      {products.map((product:ProductProps, i)=>{
          return <Product key={i} name={product.name} id={product.id} />
      })}
    </div>
    <div className="container__right">
      <Outlet />
    </div>
      
  </div>;
};

export default Store;