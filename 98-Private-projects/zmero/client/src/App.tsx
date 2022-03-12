import React, { useEffect } from 'react';
import './App.scss';
import Explore from './view/pages/explore/explore';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Reservation from "./view/pages/reservations/reservations";
import Favorite from "./view/pages/favorite/favorite";
import Restaurant from "./view/pages/restaurant/restaurant";
import Maps from "./view/pages/maps/maps"
import Admin from './view/pages/admin/admin'
import Restaurateur from './view/pages/restaurateur/restaurateur'
import AddRestaurant from './view/pages/addRestaurant/addRestaurant'
import AddRestaurateur from './view/pages/addRestaurateur/addRestaurateur'
import { useAppDispatch } from './app/hooks'
import { getAuthentication } from './app/reducers/userReducer'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    async function fetchMyAuth() {
      await dispatch(getAuthentication())
    }
    fetchMyAuth()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="Reservations" element={<Reservation />} />
        <Route path="Favorite" element={<Favorite />} />
        <Route path="Maps" element={<Maps />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Restaurateur" element={<Restaurateur />} />
        <Route path="AddRestaurant" element={<AddRestaurant />} />
        <Route path="AddRestaurateur" element={<AddRestaurateur />} />
        <Route path="/:RestaurantId" element={<Restaurant />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
