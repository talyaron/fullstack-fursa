"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./card.scss");
function Card(prop) {
    return (react_1["default"].createElement("div", { className: "Card" },
        react_1["default"].createElement("img", { src: prop.image }),
        react_1["default"].createElement("h3", null, prop.name),
        prop.desc));
}
exports["default"] = Card;
