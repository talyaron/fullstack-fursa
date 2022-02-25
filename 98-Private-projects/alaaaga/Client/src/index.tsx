import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
<<<<<<< Updated upstream:98-Private-projects/alaaA/client/src/index.tsx
import { store } from './app/store';
import { Provider } from 'react-redux';
=======
//import { store } from './app/store';
// import { Provider } from 'react-redux';
>>>>>>> Stashed changes:98-Private-projects/alaaaga/Client/src/index.tsx
import * as serviceWorker from './serviceWorker';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
