"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./index.scss");
var react_router_dom_1 = require("react-router-dom");
var homePage_1 = require("./view/pages/homePage/homePage");
var logIn_1 = require("./view/pages/logIn/logIn");
var signUp_1 = require("./view/pages/signUp/signUp");
var aboutUs_1 = require("./view/pages/AboutUs/aboutUs");
// import Cart from "./view/pages/cart/cart";
var store_1 = require("./view/pages/store/store");
var mygroups_1 = require("./view/pages/mygroups/mygroups");
function App() {
    var _a = react_1.useState([]), productsCart = _a[0], setproductsCart = _a[1];
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(homePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "Login", element: react_1["default"].createElement(logIn_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "Login", element: react_1["default"].createElement(homePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "signUp", element: react_1["default"].createElement(signUp_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "AboutUs", element: react_1["default"].createElement(aboutUs_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "HomePage", element: react_1["default"].createElement(homePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "Store", element: react_1["default"].createElement(store_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "mygroups", element: react_1["default"].createElement(mygroups_1["default"], null) }))));
}
exports["default"] = App;
