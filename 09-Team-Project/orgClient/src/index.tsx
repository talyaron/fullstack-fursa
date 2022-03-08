import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accident from './view/pages/accident/Accident';
import ProfileInfo from "./view/pages/profileInfo/ProfileInfo";
import MessagesBetweenOrg from './view/pages/messagesBetweenOrg/MessagesBetweenOrg';
import AccidentsInfo from './view/pages/accidentsInfo/AccidentsInfo';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/accidents' element={<Accident />} />
          <Route path="/" element={<App />} />
          <Route path="profileInfo" element={<ProfileInfo />} />
          <Route path="/:accidentId" element={<AccidentsInfo />} />
          <Route path="messagesBetweenOrg" element={<MessagesBetweenOrg />} />
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
