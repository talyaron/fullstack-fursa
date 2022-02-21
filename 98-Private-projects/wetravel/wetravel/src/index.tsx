import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login";
import Mainpage from "./components/Mainpage";
import Nearevents from "./components/Nearevents";
import Createevent from "./components/Createevent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import  reducers  from "../src/reducers/rootReducer";

import { increments, decrements } from "./actions/actions";

ReactDOM.render(
     <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/mainpage" element={<Mainpage />}></Route>
        <Route path="/createevent" element={<Createevent/>}></Route>
        <Route path="/nearevents" element={<Nearevents/>}></Route>
      </Routes>
    </Router> 
,

  document.getElementById("root")
);
//Store secc



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
