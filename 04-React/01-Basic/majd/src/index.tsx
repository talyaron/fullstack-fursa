import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Basket from './view-components-bar/Basket';
import './index.css';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 
import {Link} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './view-components-bar/Shop';
import {Outlet} from 'react-router-dom';
import Shop from './view-components-bar/Shop';
const bar:Array<Item> = [{title:'Home',id:'1'},{title:'Our Programs',id:'2'},{title:'About us',id:'3'},{title:'Staff',id:'4'}];
const [cartItems, setCartItems] = useState([]);
interface Item{
  title:string;
  id:string;
}


const items:Array<It> = [{id:'1',name:'jeans',price:150},
                           {id:'2',name:'shirt',price:100},
                           {id:'3',name:'sneakers',price:250},
                           {id:'4',name:'hat',price:20}];

interface It{
  id:string;
  name:string;
  price:number;
}
//import Bar from './view-components-bar/Bar';
//import Barr from './view-components-bar/Barr';
//import Majd from './pages/Majd/Majd';



const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router> 
   <Routes>
     <Route path="/" element={<Main />}/>
     <Route path="menu" element={<Menu />}>
        <Route path="age" element={<Age />} />
        <Route path="color" element={<Color />} />
     </Route>
    <Route path="shop" element={<Shop />} />
   </Routes>
  </Router>,
  rootElement
);

interface BarProp {
  title: string;
  id: string;
}


function Bar(prop: BarProp) {


  return (
     <Link to={`${prop.id}`}> {prop.title} </Link>  
  );
  
}

function Main(){
  return (
  
    <div>
    <div className='top'>
      <div>
    <img src="http://bsmart.org.il/ar/wp-content/uploads/2015/07/website-logo-H_89.png" alt="" />
    </div>
    {bar.map((item,index)=>{
      return <Bar key={index} title = {item.title} id = {item.id}/>
    })}

   </div>
   <Link to='menu'> entery</Link>
   </div>
);
}


function Age(){
  return (
    <div>
    <h1>Im 25 years old</h1>

    </div>
);
}



function Color(){
  return (
   
    <h1>My favorite color is Blue</h1>
   
   
);
}





function Menu(props:any |undefined){
  const { onAdd } = props;
  return (
    <div>
   <h1>Here is a menu function</h1>
   <div><Shop></Shop></div>
   </div>
   
); 
}


  

reportWebVitals();