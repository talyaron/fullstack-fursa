import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Cart from "./view/cart/Cart";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
