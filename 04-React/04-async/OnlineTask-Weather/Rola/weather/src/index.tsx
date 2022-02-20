import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Newyork from './components/Newyork';
import London from './components/London';
import Telaviv from './components/Telaviv';


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


