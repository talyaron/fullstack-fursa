import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import Register from './view/pages/Register/Register';
import ListForm from './view/pages/ListForm/ListForm';
import Greetings from './view/pages/Greetings/Greetings';
import TypeList from './view/pages/TypeList/TypeList';
import Login from './view/pages/Login/Login';
import List from './view/pages/List/List';

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';

import store from './redux/store';
import Home from './view/pages/Home/Home';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />}>
          <Route path="previous/:listId" element={<List />} />
          <Route path="upcoming/:listId" element={<List />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/TypeList" element={<TypeList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ListForm" element={<ListForm />} />
        <Route path="/greetings" element={<Greetings />} />

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