import React from 'react'
import ReactDOM from "react-dom";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import { useState } from 'react';

//import Reservation from "./view/pages/reservations/Reservations";
import Store from './views/pages/store/store/store'
//import Invoices from "./view/pages/explore/explore";
import Cart from "./views/pages/cart/cart";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
