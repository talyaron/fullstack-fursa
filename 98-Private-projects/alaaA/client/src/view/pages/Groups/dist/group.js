"use strict";
exports.__esModule = true;
require("./group.scss");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var header_1 = require("../../components/header/header");
var group = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("header", null,
            react_1["default"].createElement(header_1["default"], null)),
        react_1["default"].createElement("div", { className: 'warpper' },
            react_1["default"].createElement("div", null,
                "welcome to your groups ",
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Your GROUPs "),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/CreateGroup" }, "create GROUP"),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/Store" }, " to Store")))));
};
exports["default"] = group;
