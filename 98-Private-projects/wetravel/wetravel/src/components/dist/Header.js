"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Rola_jpeg_1 = require("../Images/Rola.jpeg");
require("./Header.scss");
function Header() {
    return (react_1["default"].createElement("div", { className: "header" },
        react_1["default"].createElement("div", { className: "menu-icon" },
            react_1["default"].createElement("span", { className: "line" }),
            react_1["default"].createElement("span", { className: "line" }),
            react_1["default"].createElement("span", { className: "line" })),
        react_1["default"].createElement("h3", null, " Near Events "),
        react_1["default"].createElement("img", { src: Rola_jpeg_1["default"] })));
}
exports["default"] = Header;
