"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var london_1 = require("./view/pages/london/london");
var newyork_1 = require("./view/pages/newyork/newyork");
var telaviv_1 = require("./view/pages/telaviv/telaviv");
//import Restaurant from "./view/pages/restaurant/restaurant";
//import Maps from "./view/pages/maps/maps"
//<Route path=":productId" element={<Product />} />
var rootElement = document.getElementById("root");
react_dom_1.render(react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(App_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "NewYork", element: react_1["default"].createElement(newyork_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "TelAviv", element: react_1["default"].createElement(telaviv_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "London", element: react_1["default"].createElement(london_1["default"], null) }))), rootElement);
