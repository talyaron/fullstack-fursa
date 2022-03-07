"use strict";
exports.__esModule = true;
var react_1 = require("react");
var cartItem_1 = require("./cartItem");
var react_router_dom_1 = require("react-router-dom");
function Cart(prop) {
    console.log(prop.cartItems);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, " To Store"),
        react_1["default"].createElement("div", null, prop.cartItems.map(function (product) {
            return react_1["default"].createElement(cartItem_1["default"], { key: product.id, name: product.name, id: product.id, img: product.img, cartItems: prop.cartItems, setcartItems: prop.setcartItems });
        }))));
}
exports["default"] = Cart;
