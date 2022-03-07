import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Register from './view/pages/Register/Register';
import ListForm from './view/pages/ListForm/ListForm';
import Greetings from './view/pages/Greetings/Greetings';
import TypeList from './view/pages/TypeList/TypeList';
import Login from './view/pages/Login/Login';
import List from './view/pages/List/List';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './view/pages/Home/Home';
import ChooseFriends from './view/pages/ChooseFirends/ChooseFriends';
import Contact from './view/pages/ChooseFirends/Contact/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/Contact' element={<Contact />} />
          <Route path='/ChooseFriends' element={<ChooseFriends />} />
          <Route path="/home" element={<Home />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/TypeList" element={<TypeList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ListForm" element={<ListForm />} />
          <Route path="/greetings" element={<Greetings />} />

          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();