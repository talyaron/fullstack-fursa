import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/views/Homepage";
import Cardlist from "./components/views/Cardlist";
import Card from "./components/views/Card";
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/homepage" element={<Homepage />}>
        {" "}
      </Route>
      
      <Route path="/cardlist" element={<Cardlist />}>
        {" "}
      <Route path = "" ></Route>

      </Route>

    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
