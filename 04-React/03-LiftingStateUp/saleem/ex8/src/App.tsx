import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SHOPPING_DATA from './data';
import Header from './components/header/header.component';
import HeroMessage from './components/hero/hero.component';
import Item from './components/item/Item';

function App() {

 
  const [data, setData] = useState(SHOPPING_DATA);
  const [cartCount, setcartCount] = useState(0);

 

  function addToCart(event:any){
    console.log(event.target.dataset.id);

    let index = parseInt(event.target.dataset.id);

    let tempData = data;
    tempData[index].cart = true;
    setcartCount( cartCount + 1 );
    setData(tempData )
  }

  function removeFromCart(event:any){
    let index = parseInt(event.target.dataset.id);

    let tempData = data;
    tempData[index].cart = false;

    if (cartCount > 0) {
      setcartCount(cartCount - 1 );
    }

    setData(tempData )
  }
  return (

      <div className="App">
        <Header count={cartCount} />
        <HeroMessage />

        <div className="container">
          <div className="row">
            {
              data.map((item, index) => (
             <Item index={index} add={addToCart} remove={removeFromCart} id={item.id} title={item.title} price={item.price} incart={item.cart}  ></Item>
              ))
            }

          </div>
        </div>
        
      </div>
  
  );
}

export default App;
