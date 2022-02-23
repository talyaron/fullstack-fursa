"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
require("./productCard.scss");
function ProductCard(props) {
    var name = props.name, id = props.id, img = props.img;
    return (react_1["default"].createElement("div", { className: "card" },
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/vitamins/" + name },
            react_1["default"].createElement("div", { className: "card__item" },
                react_1["default"].createElement("img", { src: img }),
                react_1["default"].createElement("span", { className: "card__item__title" }, name)))));
}
exports["default"] = ProductCard;
