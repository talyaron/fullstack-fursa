"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var reportWebVitals_1 = require("./reportWebVitals");
var Login_1 = require("./components/Login");
var Mainpage_1 = require("./components/Mainpage");
var Nearevents_1 = require("./components/Nearevents");
var Createevent_1 = require("./components/Createevent");
var Script_1 = require("./components/Script");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("../src/store/store");
document.title = "Travelers";
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
react_dom_1["default"].render(react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Login_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/mainpage", element: react_1["default"].createElement(Mainpage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/events", element: react_1["default"].createElement(Nearevents_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/createevent", element: react_1["default"].createElement(Createevent_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/script", element: react_1["default"].createElement(Script_1["default"], null) })))), document.getElementById("root"));
reportWebVitals_1["default"]();
