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
import Closet from "./view/pages/woodProduct/Closet";
import WoodProduct from "./view/pages/woodProduct/WoodProduct";
import NavProduct from "./view/pages/product/NavProduct";
import ChekOutOrder from './view/pages/checkOutOrder/CheckOutOrder';
import { Register } from './view/pages/register/Register';
import { UserOrders } from './view/pages/userOrders/UserOrders';

function App() {
  const [product, setProduct] = useState([])
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="rawmaterial" element={<Rawmaterial />} />
        <Route path="woodproduct" element={<WoodProduct />} />
        <Route path="userorders" element={<UserOrders />} />

        {/* <Route path="woodproduct" element={<WoodProduct />} >
         <Route path=":woodproId" element={<NavProduct />} />
        </Route>
        <Route path="woodProduct/:woodproId" element={<NavProduct  />} /> */}

        <Route path="door/:name" element={<Door  />} />
        <Route path="Closet/:name" element={<Closet  />} />

        <Route path="store" element={<Store />} >
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="product/:productId" element={<Product />} >
        <Route path=":woodproname" element={<NavProduct />} />
        </Route>
        <Route path="woodProduct/:woodproname" element={<NavProduct  />} />
         
        <Route path="order/:name/:pricePerMeter/:amount" element={<Order  />} />
        <Route path="cart" element={<Cart />} >
          <Route path="checkOutOrder" element={<ChekOutOrder />} />

          </Route>


      </Routes>
    </BrowserRouter>


  );
}

export default App;
