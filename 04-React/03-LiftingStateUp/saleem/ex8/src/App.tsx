import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SHOPPING_DATA from './data';
import Header from './components/header/header.component';
import HeroMessage from './components/hero/hero.component';

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
                <div key={item.id} className="col-12 col-sm-12 col-md-4 col-lg-4 pb-2 pt-2">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src="https://picsum.photos/seed/450/300" className="card-img-top" alt="cartItem" />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.price}$</p>
                      {
                        item.cart === false ?

                          <button className="btn btn-dark" data-id={index} onClick={(event) => addToCart(event)}>Add to Cart</button>
                          :

                          <button className="btn btn-danger" data-id={index} onClick={(event) => removeFromCart(event)}>Remove from cart</button>

                      }

                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
        <footer className="py-5 bg-dark">
          <div className="container"><p className="m-0 text-center text-white">Copyright © Mahith Madwesh 2021</p></div>
        </footer>
      </div>
  
  );
}

export default App;
