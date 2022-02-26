"use strict";
exports.__esModule = true;
var Rola_jpeg_1 = require("../Images/Rola.jpeg");
require("./Header.scss");
function Header() {
    return (React.createElement("div", { className: "header" },
        React.createElement("div", { className: "menu-icon" },
            React.createElement("span", { className: "line" }),
            React.createElement("span", { className: "line" })),
        React.createElement("h3", null,
            React.createElement("span", { style: { color: '#ff4500' } }, "Near Events"),
            "  "),
        React.createElement("div", { className: "flex" },
            React.createElement("img", { src: Rola_jpeg_1["default"] }))));
}
exports["default"] = Header;
