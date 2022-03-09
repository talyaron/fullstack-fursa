import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/views/Card";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/views/Homepage";
import Cardlist from "./components/views/Cardlist";
function App() {
  return ( 
    <div className="App">
      <div className="nav">
      <Link to ="/homepage">Home page</Link>
      <Link to ="/">App</Link>
      <Link to = "/cardlist"> Card list</Link>
        </div>  
    
    </div>
  );
}

export default App;
