import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './view/pages/store/Store';
import Cart from './view/pages/cart/Cart';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [products,setProducts]=useState([]);
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Store products={products} setProducts={setProducts} />} />
    <Route path="cart" element={<Cart products={products} setProducts={setProducts} />} />

  </Routes>
</BrowserRouter>
  return (
    <div className="App">
    
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
