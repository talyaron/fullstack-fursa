import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Item from './view/components/Item/Item';
import Store from './view/pages/Store/Store';
import Card from './view/pages/Card/Card';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import allReducers from './reducers/allReducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


// const store = createStore(allReducers);

ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route path="/item" element={<Item />} />
      <Route path="/store" element={<Store />} />
      <Route path="/card" element={<Card />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
