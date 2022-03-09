"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./card.scss");
function Card(prop) {
    return (react_1["default"].createElement("div", { className: "Card" },
        react_1["default"].createElement("img", { src: prop.image }),
        react_1["default"].createElement("p", { className: 'txt' },
            prop.name,
            react_1["default"].createElement("br", null),
            prop.desc)));
}
exports["default"] = Card;
