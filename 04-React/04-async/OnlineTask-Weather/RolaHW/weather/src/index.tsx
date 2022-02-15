import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import  Newyork from './components/Newyork';
import Telaviv from './components/Telaviv';
import London from './components/London';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="NewYork" element={<Newyork />} />
      <Route path="TelAviv" element={<Telaviv />} />
      <Route path="London" element={<London />} />
    </Routes>
  </BrowserRouter>,
   document.getElementById("root")
);
