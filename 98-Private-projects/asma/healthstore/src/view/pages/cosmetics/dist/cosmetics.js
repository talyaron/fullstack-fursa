"use strict";
exports.__esModule = true;
require("./cosmetics.scss");
var productCard_1 = require("./productCard");
var react_router_dom_1 = require("react-router-dom");
var products = [{ id: 1, name: 'Organic-Cosmetics', img: 'https://static.manna.global/img/cms/uk/980/5170-how-much-do-you-know-about-natural-cosmetics-152004.png' },
    { id: 2, name: 'Handmade-Cosmetics', img: 'https://previews.123rf.com/images/vchalup/vchalup1702/vchalup170200163/73392103-skincare-concept-woman-is-preparing-homemade-cosmetics-or-makeup-.jpg' },
    { id: 3, name: 'Mud-Masks', img: 'https://thumbs.dreamstime.com/b/preparing-cosmetic-mud-mask-aloe-vera-lavender-essential-oil-facial-clay-spa-products-stones-natural-cosmetics-home-137897112.jpg' }
];
function Cosmetics() {
    return (React.createElement("div", null,
        React.createElement("div", { className: "cosmetics" },
            React.createElement("h1", null, "Cosmetics"),
            React.createElement("div", { className: "cosmetics__product" }, products.map(function (product, i) {
                return React.createElement(productCard_1["default"], { key: i, name: product.name, id: product.id, img: product.img });
            })),
            React.createElement(react_router_dom_1.Outlet, null))));
}
exports["default"] = Cosmetics;
