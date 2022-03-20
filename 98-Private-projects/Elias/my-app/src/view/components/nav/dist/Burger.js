"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Burger.scss");
var Leftnav_1 = require("./Leftnav");
var Burger = function () {
    var _a = react_1.useState(false), Open = _a[0], setOpen = _a[1];
    if (!Open)
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "StyledBurger", onClick: function () { return setOpen(!Open); } },
                react_1["default"].createElement("div", { className: "lineclosed" }),
                react_1["default"].createElement("div", { className: "lineclosed" }),
                react_1["default"].createElement("div", { className: "lineclosed" })),
            react_1["default"].createElement(Leftnav_1["default"], { Open: Open })));
    else
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "StyledBurger", onClick: function () { return setOpen(!Open); } },
                react_1["default"].createElement("div", { className: "lineOpned" }),
                react_1["default"].createElement("div", { className: "lineOpned" }),
                react_1["default"].createElement("div", { className: "lineOpned" })),
            react_1["default"].createElement(Leftnav_1["default"], { Open: Open })));
};
exports["default"] = Burger;
