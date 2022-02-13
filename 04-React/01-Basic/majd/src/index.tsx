import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Bar from './view-components-bar/Bar';
import Barr from './view-components-bar/Barr';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter> 
   <Routes>
     <Route path="/" element={<App />}/>
     <Route>
     <Route path=":id" element={<Barr />} />
     </Route>
   </Routes>
  </BrowserRouter>,
  rootElement
);



