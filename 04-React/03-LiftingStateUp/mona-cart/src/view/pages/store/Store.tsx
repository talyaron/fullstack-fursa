import React from "react";
import { useState } from "react";
import Product, {productProp} from '../../components/product/Product' 

interface storeProps{
    products:any;
    setProducts:any;
}

const storeProducts=[{name:"kinder"}, {name:"kinder"}]

function Store(props:storeProps){
    const {products,setProducts}=props;
    return (
    <div >
      <h1>Store</h1>
     
      {storeProducts.map((product, i)=>{

          return  <Product key={i} name={product.name} product={products} setProduct={setProducts} />
      })}
      
  </div>);

}

export default Store