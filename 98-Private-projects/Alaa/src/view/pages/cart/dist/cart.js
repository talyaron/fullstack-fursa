"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("../../pages/store/store");
function Cart(prop) {
    var id = prop.id, name = prop.name, price = prop.price, quantity = prop.quantity, description = prop.description, Url = prop.Url;
    var productsCart = prop.productsCart, setproductsCart = prop.setproductsCart;
    function remove_item() {
        var copy = Object.assign([], productsCart);
        setproductsCart(copy.filter(function (element) {
            if (element.id != id)
                return element;
        }));
    }
    return (react_1["default"].createElement("div", { className: 'warpper' },
        prop.setproductsCart.map(function (product, i) {
            var id = product.id, name = product.name, price = product.price, quantity = product.quantity, description = product.description, Url = product.Url, productsCart = product.productsCart, setproductsCart = product.setproductsCart;
            return react_1["default"].createElement(store_1["default"], { key: i, id: id, name: name, price: price, quantity: quantity, description: description, Url: Url, productsCart: productsCart, setproductsCart: setproductsCart });
        }),
        react_1["default"].createElement("div", null,
            "  ",
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/Store" }, "Back"))));
}
exports["default"] = Cart;
