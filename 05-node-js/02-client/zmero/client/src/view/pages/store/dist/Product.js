"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
require("./Product.scss");
var Product = function (props) {
    var name = props.name, id = props.id;
    return (react_1["default"].createElement(react_router_dom_1.Link, { to: "/store/" + id },
        react_1["default"].createElement("div", { className: "product" }, name)));
};
exports["default"] = Product;
