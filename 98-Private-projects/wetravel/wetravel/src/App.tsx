import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { timeStamp } from "console";
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
import Mainpage from "./components/Mainpage";
document.title = "Travelers";
const mainpage: boolean = false;
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path="/mainpage" element={<Mainpage/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
