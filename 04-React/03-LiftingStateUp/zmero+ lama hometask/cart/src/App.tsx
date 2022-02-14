import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import Store from './views/pages/store/store'
import Cart from './views/pages/cart/cart'


function App() {
  const [cartItems, setcartItems] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Store" element={<Store cartItems={cartItems} setcartItems={setcartItems} />}>
        </Route>
        <Route path="Cart" element={<Cart cartItems={cartItems} setcartItems={setcartItems} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
