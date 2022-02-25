import React from "react";
<<<<<<< HEAD
import logo from "./logo.svg";
=======
>>>>>>> origin/Aiman
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Nearevents from "./components/Nearevents";
<<<<<<< HEAD
import Createevent from "./components/Createevent";
import {useEffect} from "react";


document.title = "Travelers";
import axios from "axios";

function App() {
   


  
=======

function App() {
>>>>>>> origin/Aiman
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path="/mainpage" element={<Mainpage/>}></Route>
        <Route path="/nearevents" element={<Nearevents/>}></Route>
        <Route path="/createevent" element={<Createevent/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
