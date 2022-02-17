"use strict";
exports.__esModule = true;
require("./headerStyle.scss");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function Header() {
    return (react_1["default"].createElement("div", { className: "header" },
        react_1["default"].createElement("div", { className: 'header-left' },
            "   ",
            react_1["default"].createElement("a", { className: "active", href: "#home" }, "Home")),
        react_1["default"].createElement("div", { className: "header-right" },
            react_1["default"].createElement("a", { href: "#contact" }),
            react_1["default"].createElement("a", { href: "#contact" }, "Requests"),
            react_1["default"].createElement("a", { href: "#about" }, "Profile"),
            react_1["default"].createElement("a", { href: "#contact" }, "Settings"),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/logIn" }, "LogOut"),
            react_1["default"].createElement("a", { href: "#contact" }, "Help"),
            react_1["default"].createElement("a", { href: "#about" }, "About Us"))));
}
exports["default"] = Header;
