import React, { useState } from 'react';
import './App.css';
import Store from './view/pages/store/Store';
import Cart from './view/pages/cart/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [products,setProducts]=useState([]);
  
  return (
    <div className="App">
      <Link to='/Store'>store</Link>
    </div>
   
  );
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Store products={products} setProducts={setProducts} />} />
    <Route path="cart" element={<Cart products={products} setProducts={setProducts} />} />

  </Routes>
</BrowserRouter>
}

export default App;
