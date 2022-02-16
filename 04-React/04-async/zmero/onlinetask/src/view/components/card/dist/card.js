"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./card.scss");
function Card(prop) {
    var img = prop.img, title = prop.title;
    return (react_1["default"].createElement("div", { className: "card" },
        react_1["default"].createElement("img", { src: img }),
        react_1["default"].createElement("h3", null, title)));
}
exports["default"] = Card;
