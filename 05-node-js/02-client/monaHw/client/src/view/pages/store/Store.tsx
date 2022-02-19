import React from "react";
import {Outlet} from 'react-router-dom'
import {ProductProps} from "./Products";
//components
import Products from "./Products";
import "./Store.scss";
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar';

const products= [{id:1,name:'raw material',image:'https://5.imimg.com/data5/SU/QO/FB/SELLER-80679574/junglee-wood-raw-material-500x500.jpg'
},{id:2,name:'wood products',image:'http://photos1.blogger.com/blogger/4326/1393/1600/Palo-36.jpg'},{id:3,name:'delivery',image:'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/104619048_3962639370443818_6284339140651318701_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=YxuC4gNeITEAX8bLL-r&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT9CAmM513xABG8RLrFyd4Vg2687seTwehtJRX96HcU85A&oe=622D9899'}]
const Store = () => {
  return <div className="store">

     { <header className='store_header'>
     <img className="store_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vD2Ck1UqS_MAX-yTblw&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-kafBKJB3bLHogSgPEVUQQtAHgClIHTT0FGy07h8nZTA&oe=622CF120" alt="" />
    <Navbar></Navbar>
     <h1 >Store</h1>
     <div className="store_header_cart">
       <Link to='/cart'>
     <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
       </Link>
        </div>
           {/* <Link to='/store'>
          <img  src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vD2Ck1UqS_MAX-yTblw&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-kafBKJB3bLHogSgPEVUQQtAHgClIHTT0FGy07h8nZTA&oe=622CF120" alt="" />
        </Link>
          <h1 >Store</h1>
          <Link to='/cart'>
          <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
        </Link> */}
        </header> }

      <div> 
        <img className='main' src="https://energyeducation.ca/wiki/images/5/52/WOOD_.jpg" alt="" />
    
      <div className='comp'>
      {products.map((product:ProductProps, i)=>{
          return <Products key={i} id={product.id} name={product.name} image={product.image}  />
      })}
      <Outlet />
      </div>
      </div>
  </div>
};

export default Store;