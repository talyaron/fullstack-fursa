import React from 'react'
import {useParams} from 'react-router-dom';


const products = [{id:1,name:'kinder',image:'https://th.bing.com/th/id/R.d35b621591a6d953ac9d716af7eb8bd4?rik=RsFl3kjuBf6BeQ&pid=ImgRaw&r=0',price:100}, {id:2,name:'oreo',image:'https://www.listchallenges.com/f/lists/45920af6-cc01-4da8-ba2d-451df9bb9e63.jpg'
,price:50},{id:3,name:'coffee',image:'https://th.bing.com/th/id/OIP.g0b-QnL0dindDMzNx-t_0wHaDK?pid=ImgDet&rs=1',price:20}];

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
     <p> Product {productId}</p>
     

      </div>
  )
}

export default Product