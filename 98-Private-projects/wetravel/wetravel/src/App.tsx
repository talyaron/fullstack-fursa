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

document.title = "Travelers";

function App() {
  const counter = useSelector((state: State) => state.counter);
  console.log(counter);
  //console.log(counter.count)
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* <Router>

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/mainpage" element={<Mainpage />}></Route>
        </Routes>
      </Router> */}

      <button onClick={() => dispatch(increments())}>Add</button>
      {counter.count}
      <button onClick={() => dispatch(decrements())}> Minus</button>
    </div>
  );
}
function mapStateToProps(state: CounterState) {
  return {
    counter: state.count,
  };
}
export default App;
