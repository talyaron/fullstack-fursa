import './App.scss';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
//components
import Card from './view/components/card/Card';
import Wood from './view/components/wood/Wood';
import Product from './view/pages/product/Product';
import { logDOM } from '@testing-library/react';
import Login from './view/pages/login/Login';
import Store from "./view/pages/store/Store";
import Order from "./view/pages/order/Order";
import Cart from "./view/pages/cart/Cart";
import Rawmaterial from "./view/pages/rawmaterial/Rawmaterial";
import HomePage  from './view/pages/admin/homePage/Hompage';
import Door from "./view/pages/woodProduct/Door";
import WoodProduct from "./view/pages/woodProduct/WoodProduct";

function App() {
  const [product, setProduct] = useState([])
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="rawmaterial" element={<Rawmaterial />} />
        <Route path="woodproduct" element={<WoodProduct />} />

        <Route path="door/:name" element={<Door />} />

        <Route path="store" element={<Store />} >
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="product/:productId" element={<Product />} />

        <Route path="order/:name" element={<Order product={product} setProduct={setProduct} />} />
        <Route path="cart" element={<Cart product={product} setProduct={setProduct} />} />


      </Routes>
    </BrowserRouter>


  );
}

export default App;
