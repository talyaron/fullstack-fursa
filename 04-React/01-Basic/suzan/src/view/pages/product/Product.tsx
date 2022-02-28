import React from 'react'
import {useParams} from 'react-router-dom';

const products = [{id:1,name:'cattle'}, {id:2,name:'finjan'},{id:3,name:'coffee'}];

const Product = () => {
  const {productId} = useParams();
 
  function getProductName(id:string|undefined,products:Array<any>):string {
    const product =  products.find(product=> product.id == id)
    if(product){
      return product.name
    } else {
      return ''
    }
  }

  return (
    <div>
      <h1>Name: {getProductName(productId,products)} </h1>
     <p> Product id: {productId}</p>

      </div>
  )
}

export default Product