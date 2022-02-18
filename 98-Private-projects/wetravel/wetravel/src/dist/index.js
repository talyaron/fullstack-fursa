"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var reportWebVitals_1 = require("./reportWebVitals");
var Login_1 = require("./components/Login");
var Mainpage_1 = require("./components/Mainpage");
var Nearevents_1 = require("./components/Nearevents");
var react_router_dom_1 = require("react-router-dom");
react_dom_1["default"].render(react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Login_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/mainpage", element: react_1["default"].createElement(Mainpage_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/nearevents", element: react_1["default"].createElement(Nearevents_1["default"], null) }))), document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
