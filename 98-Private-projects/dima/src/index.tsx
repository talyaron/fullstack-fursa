import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./view/pages/expenses/Expenses";
import Invoices from "./view/pages/invoices/Invoices";
import LogIn from "./view/logIn/LogIn";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="logIn" element={<LogIn />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
