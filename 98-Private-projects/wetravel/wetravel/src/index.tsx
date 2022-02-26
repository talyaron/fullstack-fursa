import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login";
import Mainpage from "./components/Mainpage";
import Nearevents from "./components/Nearevents";
import Createevent from "./components/Createevent";
import Script from "./components/Script";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createStore, compose } from "redux";
import reducers from "../src/reducers/rootReducer";
import { Provider } from "react-redux";
import  {store}  from "../src/store/store";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
document.title = "Travelers";
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
ReactDOM.render(

  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/mainpage" element={<Mainpage />}></Route>
        <Route path="/events" element={<Nearevents />}></Route>
        <Route path="/createevent" element={<Createevent/>}></Route>
        <Route path="/script" element={<Script/>}></Route>
      </Routes>
    </Router>
  </Provider>,

  document.getElementById("root")
);
reportWebVitals();
