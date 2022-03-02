"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./offers.scss");
function offersCard(prop) {
    return (react_1["default"].createElement("div", { className: "offersCard" },
        react_1["default"].createElement("p", { className: 'txt' },
            prop.name,
            " ",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("p", null, prop.description),
            prop.cost)));
}
exports["default"] = offersCard;
