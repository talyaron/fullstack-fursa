"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var react_2 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Store_1 = require("./view/components/pages/store/Store");
var products = ['tshirt', 'jeans', 'coat', 'dress', 'jacket'];
function App() {
    var _a = react_2.useState([]), cart = _a[0], setCart = _a[1];
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Store_1["default"], { cart: cart, setCart: setCart }) }))));
}
exports["default"] = App;
