import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import LogIn from "./view/logIn/LogIn";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="LogIn" element={<LogIn />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
