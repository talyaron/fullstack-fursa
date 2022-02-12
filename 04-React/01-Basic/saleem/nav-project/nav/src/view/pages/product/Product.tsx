import React from 'react'
import {useParams} from 'react-router-dom';
import "./Product.scss";
const products = [{id:1,quantity:4,name:'Milk',price:7,src:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.morfix.co.il%2Fmilk&psig=AOvVaw3_mtTE0MuHFvmI8hpO976Y&ust=1644577847499000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCBzIWA9fUCFQAAAAAdAAAAABAK'},
 {id:2,quantity:2,name:'drink',price:14,src:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dutyfree.co.il%2Fblu_energy_drink_250ml&psig=AOvVaw1LiHtbdP2ORXoIIpgkqCxb&ust=1644577903018000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLi25qGA9fUCFQAAAAAdAAAAABAD'},
 {id:3,quantity:1,name:'chees',price:4,src:'https://www.thespruceeats.com/thmb/xqOPGDFSQG00GsFRayfmbqwJv-U=/2000x2000/smart/filters:no_upscale()/watermelon-juice-recipe-to-burn-fat-2078407-hero-03-5754d230d6304eed951d94968c6173b8.jpg'}];

const Product = () => {
  const {productId} = useParams();
 
  function getProductPrice(id:string|undefined,products:Array<any>):string {
    const product =  products.find(product=> product.id == id)
    if(product){
      return product.price
    } else {
      return ''
    }
  }
  function getProducquantity(id:string|undefined,products:Array<any>):string {
    const product =  products.find(product=> product.id == id)
    if(product){
      return product.quantity
    } else {
      return ''
    }
  }

  return (
    <div className='tags'>
      <h1>price: {getProductPrice(productId,products)} </h1>
      <h1>quantity: {getProducquantity(productId,products)} </h1>
     <p> Product number {productId}</p>

      </div>
  )
}

export default Product