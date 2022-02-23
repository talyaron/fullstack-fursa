"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./productCard.scss");
function newCard(props) {
    var name = props.name, id = props.id;
    return (react_1["default"].createElement("div", { className: "card" },
        react_1["default"].createElement("div", { className: "card__item" },
            react_1["default"].createElement("span", { className: "card__item__title" }, name))));
}
exports["default"] = newCard;
