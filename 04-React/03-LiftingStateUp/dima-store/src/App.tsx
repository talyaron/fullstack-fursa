import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import Store from './view/store/Store';
import Cart from './view/cart/Cart';

function App() {
  const [productsList, setList] = useState([]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store productsList={productsList} setList={setList} />} />
        {/* <Route path="Store" element={<Store productsList={productsList} setList={setList} />}>
        </Route> */}
        <Route path="Cart" element={<Cart productsList={productsList} setList={setList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
