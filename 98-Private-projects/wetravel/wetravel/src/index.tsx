import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login";
import Mainpage from "./components/Mainpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import  reducers  from "../src/reducers/rootReducer";
import { Provider } from "react-redux";
import { increments, decrements } from "./actions/actions";
const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/mainpage" element={<Mainpage />}></Route>
      </Routes>
    </Router> */}
  </Provider>,

  document.getElementById("root")
);
//Store secc

store.subscribe(() => {
  console.log(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
