import React from 'react'
import {useParams} from 'react-router-dom';
import Rawmaterial from '../rawmaterial/Rawmaterial';
import WoodProduct from '../woodProduct/WoodProduct';



const products= [{id:1,name:'raw material',image:'https://5.imimg.com/data5/SU/QO/FB/SELLER-80679574/junglee-wood-raw-material-500x500.jpg'
},{id:2,name:'wood products',image:'http://photos1.blogger.com/blogger/4326/1393/1600/Palo-36.jpg'},{id:3,name:'delivery',image:'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/104619048_3962639370443818_6284339140651318701_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=YxuC4gNeITEAX8bLL-r&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT9CAmM513xABG8RLrFyd4Vg2687seTwehtJRX96HcU85A&oe=622D9899'}]
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
   
  if(productId=='1'){
  return (
      
    <div className='raw'>
       
        
           <Rawmaterial></Rawmaterial>
        
      </div>
  )}
  else{
    return (
      
        <div className='products'>
           
            
              <WoodProduct></WoodProduct>
            
          </div>
      )
  }
}

export default Product