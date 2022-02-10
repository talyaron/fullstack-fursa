import React from "react";
import {Outlet} from 'react-router-dom'
import {ProductProp} from "./Products";
//components
import Products from "./Products";


const products:Array<ProductProp> = [{id:1,name:'kinder',image:'https://th.bing.com/th/id/R.d35b621591a6d953ac9d716af7eb8bd4?rik=RsFl3kjuBf6BeQ&pid=ImgRaw&r=0',price:100}, {id:2,name:'oreo',image:'https://www.listchallenges.com/f/lists/45920af6-cc01-4da8-ba2d-451df9bb9e63.jpg'
,price:50},{id:3,name:'coffee',image:'https://th.bing.com/th/id/OIP.g0b-QnL0dindDMzNx-t_0wHaDK?pid=ImgDet&rs=1',price:20}];

const Store = () => {
  return <div>
      <h1>Store</h1>
      {products.map((product:ProductProp, i)=>{
          return <Products key={i} id={product.id} name={product.name} image={product.image} price={product.price} />
      })}
      <Outlet />
  </div>;
};

export default Store;
