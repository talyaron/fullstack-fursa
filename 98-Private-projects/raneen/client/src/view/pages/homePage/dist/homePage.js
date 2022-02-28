"use strict";
exports.__esModule = true;
require("./homePage.scss");
var react_1 = require("react");
var menu_1 = require("../../components/menu/menu");
var homePage = function () {
    return (react_1["default"].createElement("div", { className: 'warpper' },
        react_1["default"].createElement(menu_1["default"], null)));
};
exports["default"] = homePage;
