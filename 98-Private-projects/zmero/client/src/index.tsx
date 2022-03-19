import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Reservation from "./view/pages/reservations/reservations";
//import Explore from './view/pages/explore/explore'
import Favorite from "./view/pages/favorite/favorite";
import Restaurant from "./view/pages/restaurant/restaurant";
import Maps from "./view/pages/maps/maps"
//<Route path=":productId" element={<Product />} />
import { store } from './app/store';
import { Provider } from 'react-redux';
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Reservations" element={<Reservation />} />
        <Route path="Favorite" element={<Favorite />} />
        <Route path="Maps" element={<Maps />} />
        <Route path="/:RestaurantId" element={<Restaurant />} />
      </Routes>
    </BrowserRouter ></Provider>,
  rootElement
);
