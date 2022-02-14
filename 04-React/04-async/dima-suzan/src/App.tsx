import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import City from './view/city/City';

function App() {
  const [city, setCity] = useState("NewYork");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<City city={city} setCity={setCity}/>} />
        <Route path="/NewYork" element={<City city={city} setCity={setCity}/>} />
        <Route path="/TelAviv" element={<City city={city} setCity={setCity}/>} />
        <Route path="/London" element={<City city={city} setCity={setCity}/>} />
      </Routes>
    </Router>
  )
}

export default App;
