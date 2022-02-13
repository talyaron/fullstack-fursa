import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import { useState } from 'react';

//import Reservation from "./view/pages/reservations/Reservations";
import Store from './views/pages/store/store'
//import Invoices from "./view/pages/explore/explore";
import Cart from "./views/pages/cart/cart";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Store" element={<Store cartItems={cartItems} setcartItems={setcartItems} />}>
      </Route>
      <Route path="Cart" element={<Cart cartItems={cartItems} setcartItems={setcartItems} />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
