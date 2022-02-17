"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var LogIn_1 = require("./view/pages/logIn/LogIn");
var User_1 = require("./view/pages/user/User");
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(LogIn_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "User", element: React.createElement(User_1["default"], null) }))));
}
exports["default"] = App;
