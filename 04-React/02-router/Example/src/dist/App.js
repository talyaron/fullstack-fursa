"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Landing_1 = require("./pages/Landing/Landing");
var signup_1 = require("./pages/signup");
var signin_1 = require("./pages/signin");
var Nav_1 = require("./components/Nav");
require("./assets/styles/global.css");
function App() {
    var _a = react_1.useState(0), counter = _a[0], setCounter = _a[1];
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(Nav_1["default"], null),
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Landing_1["default"], { counter: counter, setCounter: setCounter }) }),
            React.createElement(react_router_dom_1.Route, { path: "/main/signUp", element: React.createElement(signup_1["default"], { counter: counter, setCounter: setCounter }) }),
            React.createElement(react_router_dom_1.Route, { path: "/main/signIn", element: React.createElement(signin_1.Signin, null) }))));
}
exports["default"] = App;
