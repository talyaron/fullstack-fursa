"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./App");
var store_1 = require("./app/store");
var react_redux_1 = require("react-redux");
var serviceWorker = require("./serviceWorker");
var react_router_dom_1 = require("react-router-dom");
var Accident_1 = require("./view/pages/accident/Accident");
var ProfileInfo_1 = require("./view/pages/profileInfo/ProfileInfo");
var MessagesBetweenOrg_1 = require("./view/pages/messagesBetweenOrg/MessagesBetweenOrg");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/accidents', element: react_1["default"].createElement(Accident_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(App_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "profileInfo", element: react_1["default"].createElement(ProfileInfo_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "messagesBetweenOrg", element: react_1["default"].createElement(MessagesBetweenOrg_1["default"], null) }))))), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
