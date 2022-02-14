import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Store from './view/pages/store/Store';
import Cart from "./view/pages/cart/Cart";
import { useState } from "react";
const rootElement = document.getElementById("root");


render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="store" element={<Store  />} />
      <Route path="cart" element={<Cart/>} />

    </Routes>
  </BrowserRouter>,
  rootElement
);
