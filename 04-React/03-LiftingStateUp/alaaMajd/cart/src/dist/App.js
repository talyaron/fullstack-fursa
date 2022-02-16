"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./App.scss");
var store_1 = require("./views/pages/store/store/store");
var cart_1 = require("./views/pages/cart/cart");
function App() {
    var _a = react_1.useState([]), cartItems = _a[0], setcartItems = _a[1];
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(store_1["default"], { cartItems: cartItems, setcartItems: setcartItems }) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "Cart", element: react_1["default"].createElement(cart_1["default"], { cartItems: cartItems, setcartItems: setcartItems }) }))));
}
exports["default"] = App;
