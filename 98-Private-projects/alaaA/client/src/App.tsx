import React, { useState } from 'react';
import { render } from "react-dom";
import './index.scss';
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
import Cart from './view/components/Cart/Cart'
import AboutUsIn from "./view/pages/aboutUsIn/aboutUsIn"
import Help from "./view/pages/help/help"
import Settings from "./view/pages/settings/settings"



interface product {
  id:number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  Url: string;
  productsCart:any;
  setproductsCart:any;
}

function App() {
const [productsCart, setproductsCart] = useState([]);




return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="Login" element={<Login />}></Route>
    <Route path="Cart" element={<Cart />} />
    <Route path="Login" element={<HomePage />} />
    <Route path="signUp" element={<SignUp />} />
    <Route path="AboutUs" element={<AboutUs />} />
    <Route path="Group" element={<Group />} />
    <Route path="CreateGroup" element={<CreateGroup />} />
    <Route path="HomePage" element={<HomePage />} />
    <Route path="Store" element={<Store />} >
    {/* <Route path="HomePage" element={<HomePage />} /> */}
    </Route>
    <Route path="mygroups" element={<Mygroups />} />

    <Route path="profile" element={<Profile />} />

    <Route path="aboutUsIn" element={<AboutUsIn />} />
    <Route path="help" element={<Help />} />
    <Route path="settings" element={<Settings />} />

    {/* <Route></Route> */}
    {/* </Route> */}
    

    {/* <Route path="invoices" element={<Invoices />} /> */}
  </Routes>
</BrowserRouter>)
}

export default App;
