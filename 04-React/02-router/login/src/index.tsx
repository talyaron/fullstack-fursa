import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import HomePage from "./view/pages/homepage/HomePage";
import Store from "./view/pages/store/Store";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="homepage" element={<HomePage />} />
      <Route path="store" element={<Store />} />

    </Routes>
  </BrowserRouter>,
  rootElement
);