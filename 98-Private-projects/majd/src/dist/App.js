"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var HomePage_1 = require("./view-components-bar/pages/HomePage");
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(HomePage_1["default"], null) }))));
}
exports["default"] = App;
