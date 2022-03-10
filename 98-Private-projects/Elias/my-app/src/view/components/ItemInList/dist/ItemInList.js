"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ItemInList.scss");
var ItemInList = function (props) {
    var name = props.name, quantity = props.quantity;
    return (react_1["default"].createElement("div", { className: "inputGroup" },
        react_1["default"].createElement("input", { id: name, name: name, type: "checkbox" }),
        react_1["default"].createElement("label", { className: "ItemListLabel", htmlFor: name },
            " ",
            react_1["default"].createElement("div", { className: 'namediv' }, name),
            react_1["default"].createElement("div", { className: 'quantitydiv' }, quantity))));
};
exports["default"] = ItemInList;
