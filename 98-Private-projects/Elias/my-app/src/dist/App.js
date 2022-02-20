"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var ViewList_1 = require("./view/components/ViewList/ViewList");
var Navbar_1 = require("./view/components/nav/Navbar");
var react_router_dom_1 = require("react-router-dom");
var Signup_1 = require("./view/Pages/Signup/Signup");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/Signup", element: react_1["default"].createElement(Signup_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(ViewList_1["default"], null) }))));
}
exports["default"] = App;
