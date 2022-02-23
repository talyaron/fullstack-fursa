import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Vitamins from "./view/pages/vitamins/vitamins";
import Product from "./view/pages/product/product";
import Cosmatics from './view/pages/cosmatics';
import SugerFree from './view/pages/sugerfree';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="vitamins" element={<Vitamins />}>
        <Route path=":productId" element={<Product />} />
        </Route>
      <Route path="cosmatics" element={<Cosmatics />}/>
      <Route path="sugerfree" element={<SugerFree />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);
