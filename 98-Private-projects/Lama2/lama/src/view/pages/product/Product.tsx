import React from 'react'
import {useParams} from 'react-router-dom';
import '../product/Product.scss';

// const horses:Array<horse>=[{name:'Zoro',age:5,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnVjp6dcfqRT0CGg5Q89VXbV0RsfJ-Y9png&usqp=CAU'},
// {name:'Ice',age:6,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxcYVFc1xSuH9jgYeJgDXsVw0P7KdnX53UA&usqp=CAU'}]

const products = [{id:1,name:'cattle',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxcYVFc1xSuH9jgYeJgDXsVw0P7KdnX53UA&usqp=CAU'},
 {id:2,name:'finjan',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnVjp6dcfqRT0CGg5Q89VXbV0RsfJ-Y9png&usqp=CAU'},
 {id:3,name:'coffee',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnVjp6dcfqRT0CGg5Q89VXbV0RsfJ-Y9png&usqp=CAU'}];

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
      {/* <img src={productId.im} alt="" /> */}
     <p> Product {productId}</p>

      </div>
  )
}

export default Product