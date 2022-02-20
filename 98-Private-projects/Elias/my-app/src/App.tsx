import React from 'react';
import './App.css';
import ViewList from './view/components/ViewList/ViewList';
import Navbar from './view/components/nav/Navbar'
import { Router } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Signup from './view/Pages/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/Signup" element={<Signup/>} />
      <Route path="/" element={<ViewList />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
