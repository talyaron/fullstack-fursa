import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Page1 from "./view/pages/page1/page1";
import Page2 from "./view/pages/page2/page2";
import {useState} from 'react';

const rootElement = document.getElementById("root");

const [state, setState] = useState(0);

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 setState={setState} state={state} />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);


*/

/***
 * const [state, setState] = useState(0)
 * setState={setState} state={state} */