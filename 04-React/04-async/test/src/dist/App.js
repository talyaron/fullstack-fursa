"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var City_1 = require("./view/city/City");
function App() {
    var _a = react_1.useState("NewYork"), city = _a[0], setCity = _a[1];
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(City_1["default"], { city: city, setCity: setCity }) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/NewYork", element: react_1["default"].createElement(City_1["default"], { city: city, setCity: setCity }) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/TelAviv", element: react_1["default"].createElement(City_1["default"], { city: city, setCity: setCity }) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/London", element: react_1["default"].createElement(City_1["default"], { city: city, setCity: setCity }) }))));
}
exports["default"] = App;
