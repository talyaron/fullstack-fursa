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
import Cart from "./view/pages/cart/cart";
import Store from "./view/pages/store/store";

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
    <Route path="Cart" element={<Cart id={0} name={""} price={0} quantity={0} description={""} Url={""} productsCart={[]} setproductsCart={[]} />} />
    <Route path="Login" element={<HomePage />} />
    <Route path="signUp" element={<SignUp />} />
    <Route path="AboutUs" element={<AboutUs />} />
    <Route path="HomePage" element={<HomePage />} />
    <Route path="Store" element={<Store />} />
    {/* <Route></Route> */}
    {/* </Route> */}
    

    {/* <Route path="invoices" element={<Invoices />} /> */}
  </Routes>
</BrowserRouter>)
}

export default App;
