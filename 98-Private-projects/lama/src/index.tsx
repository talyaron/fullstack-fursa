import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./view/pages/expenses/Expenses";
import Invoices from "./view/pages/Invoices/Invoices";
import Store from './view/pages/store/Store';
import Product from "./view/pages/product/Product";
import HomePage from "./view/pages/homepage/index";
import SignIn from "./view/pages/signIn/index";

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


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="store" element={<Store />} >
        <Route path=":productId" element={<Product />} />
     
      </Route>
      <Route path="homepage" element={<HomePage />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="product/:productId" element={<Product />} />
    </Routes>
  </BrowserRouter>,
    // document.getElementById("root")
  rootElement
);

