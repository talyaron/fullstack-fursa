import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Expenses from "./view/pages/expenses/Expenses";
import Invoices from "./view/pages/Invoices/Invoices";
import Store from './view/pages/store/Store';
import Product from "./view/pages/product/Product";

import Register from './view/pages/Register/Register';
import ListForm from './view/pages/ListForm/ListForm';
import Greetings from './view/pages/Greetings/Greetings';
import TypeList from './view/pages/TypeList/TypeList';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers/allReducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/TypeList" element={<TypeList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ListForm" element={<ListForm />} />
        <Route path="/greetings" element={<Greetings />} />

        <Route path="/expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="store" element={<Store />} >
          <Route path=":productId" element={<Product />} />
        </Route>

        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();