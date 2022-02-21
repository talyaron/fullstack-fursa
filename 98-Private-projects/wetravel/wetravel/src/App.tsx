import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { timeStamp } from "console";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Nearevents from "./components/Nearevents";
import axios from "axios";

function App() {

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/mainpage" element={<Mainpage />}></Route>
          <Route path="/nearevents" element={<Nearevents />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
