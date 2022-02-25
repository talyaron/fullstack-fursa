"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var ViewList_1 = require("./view/components/ViewList/ViewList");
var Navbar_1 = require("./view/components/nav/Navbar");
var Bottom_Nav_1 = require("./view/components/nav/Bottom_Nav");
var react_router_dom_1 = require("react-router-dom");
var Signup_1 = require("./view/Pages/Signup/Signup");
var Homepage_1 = require("./view/Pages/Homepage/Homepage");
var TravelInfo1_1 = require("./view/Pages/TravelInfo1/TravelInfo1");
var TravelInfo2_1 = require("./view/Pages/TravelInfo2/TravelInfo2");
var Test_1 = require("./view/Pages/TravelInfo1/Test");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Homepage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/TravelInfo1", element: react_1["default"].createElement(TravelInfo1_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/TravelInfo2", element: react_1["default"].createElement(TravelInfo2_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/Signup", element: react_1["default"].createElement(Signup_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/ViewList", element: react_1["default"].createElement(ViewList_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/Test", element: react_1["default"].createElement(Test_1["default"], null) })),
        react_1["default"].createElement(Bottom_Nav_1["default"], null)));
}
exports["default"] = App;
