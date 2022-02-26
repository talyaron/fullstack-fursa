import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./view/pages/homePage/homePage";
import Login from "./view/pages/logIn/logIn";
import SignUp from "./view/pages/signUp/signUp";
import AboutUs from "./view/pages/AboutUs/aboutUs";
import Group from "./view/pages/Groups/group";
import CreateGroup from "./view/pages/CreateGroup/createGroup";
import Store from "./view/pages/store/store";
import Mygroups from './view/pages/mygroups/mygroups';
import Profile from './view/pages/profile/profile';
import Seller from './view/pages/AdminPages/Seller/seller';
import Cart from './view/components/Cart/Cart'
import AboutUsIn from "./view/pages/aboutUsIn/aboutUsIn"
import AboutUsAdmin from "./view/pages/AdminPages/aboutUsAdmin/aboutUsAdmin"
import Help from "./view/pages/help/help"
import Settings from "./view/pages/settings/settings"
import GroupDetails from './view/pages/GroupDetails/GroupDetails';

import AddProduct from './view/pages/AdminPages/AddProduct/AddProduct';
import MyOrders from './view/pages/MyOrders/MyOrders';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Seller" element={<Seller />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<HomePage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Group" element={<Group />} />
        <Route path="/CreateGroup" element={<CreateGroup />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/mygroups" element={<Mygroups />} />
        <Route path="/mygroups/:id" element={<GroupDetails />} />
        <Route path="/users/:id" element={<Profile />} />
        <Route path="/GroupDetails" element={<GroupDetails />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/aboutUsIn" element={<AboutUsIn />} />
        <Route path="/AboutUsAdmin" element={<AboutUsAdmin />} />
        <Route path="/help" element={<Help />} />
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
