"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
//components
var Product_1 = require("./Product");
var products = [{ id: 1, name: 'Book', img: 'https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg' }, { id: 2, name: 'House', img: 'https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg' }, { id: 3, name: 'coffee', img: 'https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg' }];
var Store = function () {
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "Store"),
        products.map(function (product, i) {
            return react_1["default"].createElement(Product_1["default"], { key: i, name: product.name, id: product.id, img: product.img });
        }),
        react_1["default"].createElement(react_router_dom_1.Outlet, null));
};
exports["default"] = Store;
