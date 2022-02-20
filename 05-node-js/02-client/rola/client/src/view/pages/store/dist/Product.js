"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./Product.scss");
var Product = function (props) {
    var name = props.name, id = props.id, img = props.img;
    return (React.createElement(react_router_dom_1.Link, { to: "/product/" + id },
        React.createElement("div", { className: "product" }, name)));
};
exports["default"] = Product;
