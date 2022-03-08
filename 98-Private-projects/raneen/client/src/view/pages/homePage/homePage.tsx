import './homePage.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Mainbar from '../../components/menu/menu';
import { Counter } from "../../../features/counter/Counter";
import TextShow from "../../../features/text/TextShow";
import TextInput from "../../../features/text/TextInput";
// import {useState, useEffect} from 'react';
import Card from '../../components/card/Card';

import RecipeReviewCard from '../../components/productCard/productCard';

const clothes:Array<item> = [{name:'WOOL BLEND HIGH NECK COAT', price:500,img:'https://static.zara.net/photos///2022/V/0/1/p/2096/289/802/2/w/830/2096289802_1_1_1.jpg?ts=1637256490476'}
,{name:'COAT WITH DETACHABLE FAUX FUR DETAIL ON THE COLLAR',price:200, img:'https://static.zara.net/photos///2022/V/0/1/p/2179/289/704/2/w/1126/2179289704_1_1_1.jpg?ts=1640000139595'}];
interface item{
  name:string;
  price:number;
  img:string;
}

function HomePage() {

    return(
        <div className="homePage">
        <div >
        <img src="https://i.pinimg.com/originals/68/05/ef/6805ef9b55da5090985bcaf8d0130097.gif" alt="" />
        </div>
      
        
            {/* <div className="product">
       <RecipeReviewCard/>
      
       </div>
            <div className="product">
       <RecipeReviewCard/>
      
       </div>
            <div className="product">
       <RecipeReviewCard/>
      
       </div> */}
             {/* <img src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-shoes-bags/subhome-xmedia-08//w/1728/IMAGE-large-landscape-b1c8fbe8-bf41-4aa7-bad0-794f0713c4b9-default_0.jpg?ts=1645713783552" alt="" />
           {clothes.map((item1, index)=>{
        const {name,price,img}= item1;
        return <Card key={index} info ={{name,price,img} } />
        
        
      })} */}
 
        </div>
    );
}

export default HomePage;