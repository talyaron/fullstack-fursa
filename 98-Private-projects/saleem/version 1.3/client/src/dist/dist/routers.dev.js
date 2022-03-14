"use strict";

exports.__esModule = true;

var react_1 = require("react");

var react_router_dom_1 = require("react-router-dom");

var Dashboard_1 = require("../pages/Dashbaord/dist/Dashboard");

var MainPage_1 = require("./pages/Dashbaord/panels/MainPage");

var Tasks_1 = require("./pages/Dashbaord/panels/Tasks");

var Landing_1 = require("./pages/Landing");

var signin_1 = require("./pages/signin");

var signup_1 = require("./pages/signup");

function Routers() {
  return react_1["default"].createElement(react_router_dom_1.BrowserRouter, null, react_1["default"].createElement(react_router_dom_1.Routes, null, react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/main",
    element: react_1["default"].createElement(Landing_1.Landing, null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/main/signUp",
    element: react_1["default"].createElement(signup_1.Signup, null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/main/signIn",
    element: react_1["default"].createElement(signin_1.Signin, null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/Dashboard",
    element: react_1["default"].createElement(Dashboard_1["default"], null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/",
    element: react_1["default"].createElement(MainPage_1["default"], null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "child2",
    element: react_1["default"].createElement(Tasks_1["default"], null)
  })));
}

exports["default"] = Routers;