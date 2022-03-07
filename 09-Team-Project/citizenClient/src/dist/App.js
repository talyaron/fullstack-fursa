"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var home_1 = require("./view/pages/home/home");
require("./App.css");
var Emergency_1 = require("./view/pages/emergency/Emergency");
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(home_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/emergency", element: React.createElement(Emergency_1.Emergency, null) }))));
}
exports["default"] = App;
