import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Store from './view/pages/store/Store';
import Cart from "./view/pages/cart/Cart";
function App() {
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="store" element={<Store  />} />
    <Route path="cart" element={<Cart/>} />

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
