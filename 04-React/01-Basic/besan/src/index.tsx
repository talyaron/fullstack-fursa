import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Home from './view/pages/Home/Home'
import About from './view/pages/About/About'


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<About />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
