import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Reservation from "./view/pages/reservations/Reservations";
import Login from "./view/pages/login/login";
//import Invoices from "./view/pages/explore/explore";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Reservations" element={<Reservation />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
