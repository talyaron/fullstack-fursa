import React from "react";
import { useState } from "react";
import Product, {productProp} from '../../components/product/Product' 



const storeProducts=[{name:"kinder"}, {name:"kinder"}]

function Store(){
    const[products,setProduct]=useState([])
    return (
    <div >
      <h1>Store</h1>
     
      {storeProducts.map((product, i)=>{

          return  <Product key={i} name={product.name} product={products} setProduct={setProduct} />
      })}
      
  </div>);

}

export default Store;