"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var MainHeader_1 = require("../../components/main header/MainHeader");
var ClassContainer_1 = require("../../components/classContainer/ClassContainer");
var box = { name: 'Class 1A', teacher: 'suzan kassabry' };
var boxes = [box, box];
function Classes() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement(MainHeader_1["default"], null)),
        react_1["default"].createElement(ClassContainer_1["default"], null)));
}
exports["default"] = Classes;
