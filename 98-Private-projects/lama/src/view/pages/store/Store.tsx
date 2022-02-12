import React from "react";
import {Outlet} from 'react-router-dom'
import {ProductProps} from './Product';
//components
import Product from "./Product";


// const products = [{id:1,name:'cattle'}, {id:2,name:'finjan'},{id:3,name:'coffee'}];
const products = [{id:1,name:'cattle',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxcYVFc1xSuH9jgYeJgDXsVw0P7KdnX53UA&usqp=CAU'},
 {id:2,name:'finjan',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnVjp6dcfqRT0CGg5Q89VXbV0RsfJ-Y9png&usqp=CAU'},
 {id:3,name:'coffee',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnVjp6dcfqRT0CGg5Q89VXbV0RsfJ-Y9png&usqp=CAU'}];


const Store = () => {
  return <div>
      <h1>Store</h1>
      {products.map((product:ProductProps, i)=>{
          return <Product key={i} name={product.name} id={product.id} img={product.img}/>
      })}
      <Outlet />
  </div>;
};

export default Store;
