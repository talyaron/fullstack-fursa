import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import London from "./view/pages/london/london";
import NewYork from './view/pages/newyork/newyork'
import TelAviv from "./view/pages/telaviv/telaviv";
//import Restaurant from "./view/pages/restaurant/restaurant";
//import Maps from "./view/pages/maps/maps"
//<Route path=":productId" element={<Product />} />
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="NewYork" element={<NewYork />} />
      <Route path="TelAviv" element={<TelAviv />} />
      <Route path="London" element={<London />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
