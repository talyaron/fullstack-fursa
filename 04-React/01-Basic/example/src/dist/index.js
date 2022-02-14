"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var Expenses_1 = require("./view/pages/expenses/Expenses");
var Invoices_1 = require("./view/pages/Invoices/Invoices");
var Store_1 = require("./view/pages/store/Store");
var Product_1 = require("./view/pages/product/Product");
var rootElement = document.getElementById("root");
react_dom_1.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(react_router_dom_1.Routes, null,
        React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(App_1["default"], null) }),
        React.createElement(react_router_dom_1.Route, { path: "expenses", element: React.createElement(Expenses_1["default"], null) }),
        React.createElement(react_router_dom_1.Route, { path: "invoices", element: React.createElement(Invoices_1["default"], null) }),
        React.createElement(react_router_dom_1.Route, { path: "store", element: React.createElement(Store_1["default"], null) },
            React.createElement(react_router_dom_1.Route, { path: ":productId", element: React.createElement(Product_1["default"], null) })))), rootElement);
