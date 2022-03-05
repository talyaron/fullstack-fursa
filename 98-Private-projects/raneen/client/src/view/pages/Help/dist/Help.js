"use strict";
exports.__esModule = true;
require("./homePage.scss");
var react_1 = require("react");
var menu_1 = require("../../components/menu/menu");
var HelpShow_1 = require("../../../features/help/HelpShow");
var HelpInput_1 = require("../../../features/help/HelpInput");
var Help = function () {
    return (react_1["default"].createElement("div", { className: "warpper" },
        react_1["default"].createElement(menu_1["default"], null),
        react_1["default"].createElement(HelpInput_1["default"], null),
        react_1["default"].createElement(HelpShow_1["default"], null)));
};
exports["default"] = Help;
