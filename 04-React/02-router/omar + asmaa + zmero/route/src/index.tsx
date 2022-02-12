import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
//import Reservation from "./view/pages/reservations/Reservations";
import Store from './views/pages/store/store'
//import Invoices from "./view/pages/explore/explore";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Store" element={<Store />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
