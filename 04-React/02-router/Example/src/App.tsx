import {useState} from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing  from "./pages/Landing/Landing";
import Signup from "./pages/signup";
import { Signin } from "./pages/signin";
import Nav from './components/Nav'

import "./assets/styles/global.css";


function App() {

  const [counter, setCounter]= useState(0)

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing counter={counter} setCounter={setCounter} />} />
        <Route path="/main/signUp" element={<Signup  counter={counter} setCounter={setCounter} />} />
        <Route path="/main/signIn" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
