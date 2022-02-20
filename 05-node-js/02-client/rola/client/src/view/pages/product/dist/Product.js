"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var products = [{ id: 1, name: 'Book', img: 'data:image/jpeg;base64,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' }, { id: 2, name: 'House', img: 'https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg' }, { id: 3, name: 'coffee', img: 'https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg' }];
var Product = function () {
    var productId = react_router_dom_1.useParams().productId;
    function getProductName(id, products) {
        var product = products.find(function (product) { return product.id == id; });
        if (product) {
            return product.name;
        }
        else {
            return '';
        }
    }
    function getProductImg(id, products) {
        var product = products.find(function (product) { return product.id == id; });
        if (product) {
            return product.img;
        }
        else {
            return '';
        }
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null,
            getProductName(productId, products),
            " "),
        react_1["default"].createElement("img", { src: getProductImg(productId, products) })));
};
exports["default"] = Product;
