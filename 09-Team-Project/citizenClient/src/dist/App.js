"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var home_1 = require("./view/pages/home/home");
var profile_1 = require("./view/pages/profile/profile");
require("./App.css");
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(home_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/profile", element: React.createElement(profile_1["default"], null) }))));
}
exports["default"] = App;
