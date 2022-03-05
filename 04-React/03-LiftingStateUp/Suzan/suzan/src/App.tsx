import React from 'react';
import './App.scss';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Product from './view/components/product/Product';
import Item from './view/components/item/Item';
import Cart from './view/pages/cart/Cart';
import Store from './view/pages/store/Store';



const products = ['tshirt', 'jeans', 'coat', 'dress', 'jacket'];

function App() {

  const [cart, setCart] = useState([]);

  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<Store cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>

  );
}

export default App;
