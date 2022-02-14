import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Cart from "./view/components/pages/cart/Cart";

//pages

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cart" element={<Cart generalCart={undefined} setGeneralCart={undefined}  />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
