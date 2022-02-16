"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var Expenses_1 = require("./view/pages/expenses/Expenses");
var Invoices_1 = require("./view/pages/Invoices/Invoices");
var Store_1 = require("./view/pages/store/Store");
var Product_1 = require("./view/pages/product/Product");
var rootElement = document.getElementById("root");
react_dom_1.render(react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(App_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "expenses", element: react_1["default"].createElement(Expenses_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "invoices", element: react_1["default"].createElement(Invoices_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "store", element: react_1["default"].createElement(Store_1["default"], null) },
            react_1["default"].createElement(react_router_dom_1.Route, { path: ":productId", element: react_1["default"].createElement(Product_1["default"], null) })))), rootElement);
