"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("react");
require("./App.css");
var TA_1 = require("./components/TA/TA");
var London_1 = require("./components/London/London");
var NY_1 = require("./components/NY/NY");
var navbar_1 = require("./components/Navbar/navbar");
function App() {
    var _a = react_2.useState(0), TATemp = _a[0], setTATemp = _a[1];
    var _b = react_2.useState(0), NYTemp = _b[0], setNYTemp = _b[1];
    var _c = react_2.useState(0), LondonTemp = _c[0], setLondonTemp = _c[1];
    getWather();
    function getWather() {
        fetch("http://api.weatherstack.com/current?access_key=b96d051120a1d6c4da58c21352316643&query=Tel20%Aviv")
            .then(function (response) { return response.json(); })
            .then(function (data) { return console.log(data.current); })["catch"](function (err) {
            console.error(err);
        });
    }
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(NY_1["default"], { NYTemp: NYTemp, setNYTemp: setNYTemp }) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/TA", element: react_1["default"].createElement(TA_1["default"], { TATemp: TATemp, setTATemp: setTATemp }) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/London", element: react_1["default"].createElement(London_1["default"], { LondonTemp: LondonTemp, setLondonTemp: setLondonTemp }) })),
        react_1["default"].createElement(navbar_1["default"], null)));
}
exports["default"] = App;
