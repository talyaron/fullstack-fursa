import React from 'react'
import ReactDOM, { render } from "react-dom";
import App from "./App";
import { store } from './app/store';
import { Provider } from 'react-redux';
import { getAuthentication } from './app/reducers/userReducer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);