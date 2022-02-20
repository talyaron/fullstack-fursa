import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { timeStamp } from "console";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import { CounterState, State } from "./reducers/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { increments, decrements } from "./actions/actions";


function App() {
  const counter = useSelector((state: State) => state.counter);
  console.log(counter);
  //console.log(counter.count)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/mainpage" element={<Mainpage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
