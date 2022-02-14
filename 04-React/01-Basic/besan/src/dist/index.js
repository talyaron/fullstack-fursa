"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var Home_1 = require("./view/pages/Home/Home");
var About_1 = require("./view/pages/About/About");
var rootElement = document.getElementById("root");
react_dom_1.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(react_router_dom_1.Routes, null,
        React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(App_1["default"], null) }),
        React.createElement(react_router_dom_1.Route, { path: "Home", element: React.createElement(Home_1["default"], null) }),
        React.createElement(react_router_dom_1.Route, { path: "About", element: React.createElement(About_1["default"], null) }))), rootElement);
