import React from 'react';

import './App.css';
import {useState,useEffect} from 'react'
import { render } from "react-dom";
//import Navbar from './view/components/navbar/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import London from "./view/pages/london/London";
import NewYork from "./view/pages/newYork/NewYork";
import TelAviv from './view/pages/telAviv/TelAviv';
import Ajv from "ajv";
import Cities from './view/pages/cities/Cities';
const ajv = Ajv();





function App() {
  
  
  return (
    <BrowserRouter>
  <Routes>
     <Route path="/" element={<Cities/>} />
      <Route path="london" element={<London   />} />
      <Route path="newYork" element={<NewYork  />} />
      <Route path="telAviv" element={<TelAviv />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
