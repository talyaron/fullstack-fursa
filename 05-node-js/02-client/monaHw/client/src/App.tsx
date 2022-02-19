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

function App() {
  const [product, setProduct] = useState([])
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
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
