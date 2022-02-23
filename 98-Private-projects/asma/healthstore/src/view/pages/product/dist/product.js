"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./product.scss");
var Product = function (props) {
    var productId = react_router_dom_1.useParams().productId;
    var products = props.products;
    function getProduct(name) {
        var producResult = products.find(function (product) { return product.name === name; });
        if (producResult)
            return producResult;
        return { id: 0, name: "", img: "", text: "" };
    }
    return (React.createElement("div", { className: 'product' },
        React.createElement("h1", null, productId),
        React.createElement("img", { src: getProduct(productId).img }),
        React.createElement("p", null, getProduct(productId).text)));
};
exports["default"] = Product;
