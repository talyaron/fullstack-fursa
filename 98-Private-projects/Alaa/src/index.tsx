
import { render } from "react-dom";
import './index.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import HomePage from "./view/pages/homePage/homePage";
import Login from "./view/pages/logIn/logIn";
import SignUp from "./view/pages/signUp/signUp";
import AboutUs from "./view/pages/AboutUs/aboutUs";


// import Invoices from "./view/pages/Invoices/Invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="Login" element={<Login />}></Route>
      <Route path="Login" element={<HomePage />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="AboutUs" element={<AboutUs />} />
      <Route path="HomePage" element={<HomePage />} />
      <Route path="App" element={<App />} >
      {/* <Route></Route> */}
      </Route>
      

      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>,
  rootElement
);