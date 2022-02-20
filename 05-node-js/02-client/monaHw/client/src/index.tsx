import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Login from "./view/pages/login/Login";
import Store from "./view/pages/store/Store";
import Product from "./view/pages/product/Product";
import Order from "./view/pages/order/Order";



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="store" element={<Store />} >
      <Route path=":productId" element={<Product />} />
      </Route>
      <Route path="product/:productId" element={<Product />} />
      
      <Route path="order/:name" element={<Order />} />


    </Routes>
  </BrowserRouter>,
  rootElement
);