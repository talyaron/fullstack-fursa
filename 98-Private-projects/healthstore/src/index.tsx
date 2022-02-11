import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Products from "./view/pages/products/products";
import Vitamins from "./view/pages/vitamins";
import Cosmatics from './view/pages/home/cosmatics';
import SugerFree from './view/pages/sugerfree';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="products" element={<Products />}/>
      <Route path="vitamins" element={<Vitamins />}/>
      <Route path="cosmatics" element={<Cosmatics />}/>
      <Route path="sugerfree" element={<SugerFree />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);
