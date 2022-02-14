import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import Product from './view/components/product/Product';
import Item from './view/components/item/Item';

const products = ['tshirt', 'jeans', 'coat', 'dress', 'jacket'];

function App() {

  const [generalCart, setGeneralCart] = useState([]);

  return (
  
    <div className="App">
      <div className="wrapper">
        <div className="wrapper__products">
          {/* <Link to='/cart' state={{generalcart:{generalCart, setGeneralCart}}}>go to cart</Link> */}
        {
          products.map((product, index)=>{
            return <Product key={index} name={product} generalCart={generalCart} setGeneralCart={setGeneralCart}></Product>
          })
        }
        </div>
        <div className="wrapper__cart">
          {
            generalCart.map((item, index)=>{
              return <Item key={index} name={item} generalCart={generalCart} setGeneralCart={setGeneralCart}></Item>
            })
          }
        </div>
        
      </div>
    </div>
  );
}

export default App;
