import { render } from "react-dom";
import {
  BrowserRouter,
  Routes, 
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./view/pages/expenses/Expenses";
import Invoices from "./view/pages/Invoices/Invoices";
import Store from './view/pages/store/Store';
import Product from "./view/pages/product/Product";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="store" element={<Store />} >
        <Route path=":productId" element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
