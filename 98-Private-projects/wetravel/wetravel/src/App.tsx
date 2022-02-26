import React from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Nearevents from "./components/Nearevents";
import Createevent from "./components/Createevent";
import Script from "./components/Script";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path="/mainpage" element={<Mainpage/>}></Route>
        <Route path="/nearevents" element={<Nearevents/>}></Route>
        <Route path="/createevent" element={<Createevent/>}></Route>
        <Route path="/script" element={<Script/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
