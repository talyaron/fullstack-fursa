// import { Facebook } from '@material-ui/icons';
import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Login from './view/pages/login/LoginPage'
import Gmail from "./view/pages/SignUpGmail/Gmail"
import Facebook1 from "./view/pages/SignUpGmail/Gmail"
import Gender from './view/pages/gender/Gender'
import Goal from './view/pages/goal/Goal'
import Activity from './view/pages/activity/Activity'
import Name from './view/pages/name/Name'
import Height from './view/pages/height/Height'
import Age from './view/pages/age/Age'
import Weight from './view/pages/weight/Weight'
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Weight" element={<Weight />}> </Route>
      <Route path="/Height" element={<Height />}> </Route>
      <Route path="/Age" element={<Age />}> </Route>
      <Route path="/Name" element={<Name />}> </Route>
      <Route path="/Activity" element={<Activity />}> </Route>
      <Route path="/Goal" element={<Goal />}> </Route>
      <Route path="/Gender" element={<Gender />}> </Route>
      <Route path="/Login" element={<Login />}> </Route>
      <Route path="/Facebook" element={<Facebook1 />} />
      <Route path="/Gmail" element={<Gmail />}>
      
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

