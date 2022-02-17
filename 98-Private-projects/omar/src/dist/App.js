"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var FirstTemplate_1 = require("./view/components/firstTemplate/FirstTemplate");
var Profile_1 = require("./view/components/profile/Profile");
var App = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(FirstTemplate_1["default"], null),
        react_1["default"].createElement(Profile_1["default"], null)));
};
exports["default"] = App;
// export default App;
// import React from 'react'
// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import App from "./App";
// import Login from './view/pages/login/LoginPage'
// import Gmail from "./view/pages/SignUpGmail/Gmail"
// import Facebook1 from "./view/pages/SignUpGmail/Gmail"
// import Gender from './view/pages/gender/Gender'
// import Goal from './view/pages/goal/Goal'
// import Activity from './view/pages/activity/Activity'
// import Name from './view/pages/name/Name'
// import Height from './view/pages/height/Height'
// import Age from './view/pages/age/Age'
// import Weight from './view/pages/weight/Weight'
// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/Weight" element={<Weight />}> </Route>
//       <Route path="/Height" element={<Height />}> </Route>
//       <Route path="/Age" element={<Age />}> </Route>
//       <Route path="/Name" element={<Name />}> </Route>
//       <Route path="/Activity" element={<Activity />}> </Route>
//       <Route path="/Goal" element={<Goal />}> </Route>
//       <Route path="/Gender" element={<Gender />}> </Route>
//       <Route path="/Login" element={<Login />}> </Route>
//       <Route path="/Facebook" element={<Facebook1 />} />
//       <Route path="/Gmail" element={<Gmail />}>
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );
