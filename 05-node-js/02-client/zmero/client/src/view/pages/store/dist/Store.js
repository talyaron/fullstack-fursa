"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
//components
var Product_1 = require("./Product");
var products = [{ id: 1, name: 'cattle' }, { id: 2, name: 'finjan' }, { id: 3, name: 'coffee' }];
var Store = function () {
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "Store"),
        products.map(function (product, i) {
            return react_1["default"].createElement(Product_1["default"], { key: i, name: product.name, id: product.id });
        }),
        react_1["default"].createElement(react_router_dom_1.Outlet, null));
};
exports["default"] = Store;
