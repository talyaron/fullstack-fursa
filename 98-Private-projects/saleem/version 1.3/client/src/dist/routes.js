"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Landing_1 = require("./pages/Landing");
var signup_1 = require("./pages/signup");
var signin_1 = require("./pages/signin");
(function () {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: 'main/', element: react_1["default"].createElement(Landing_1.Landing, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/main/signUp', element: react_1["default"].createElement(signup_1.Signup, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/main/signIn', element: react_1["default"].createElement(signin_1.Signin, null) }))));
});
