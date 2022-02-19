"use strict";
exports.__esModule = true;
require("../Cart/Cart.scss");
function Cart(prop) {
    console.log(prop.products);
    return (React.createElement("div", { className: "cart" }, prop.products.map(function (product, i) {
        var id = product.id, name = product.name, price = product.price, quantity = product.quantity, description = product.description, Url = product.Url, productsCart = product.productsCart, setproductsCart = product.setproductsCart;
        React.createElement("div", null,
            React.createElement("img", { src: Url, alt: "" }),
            React.createElement("h3", null, name),
            React.createElement("p", null,
                "Price : ",
                price));
    })));
}
exports["default"] = Cart;
