import React from "react";
import "./App.css";
import Login from "./components/Login";
import { timeStamp } from "console";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Nearevents from "./components/Nearevents";
import Createevent from "./components/Createevent";
import axios from "axios";
import {useEffect} from "react";


document.title = "Travelers";

function App() {
   


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
