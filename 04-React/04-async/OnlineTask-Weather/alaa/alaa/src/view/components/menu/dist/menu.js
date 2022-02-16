"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./menu.scss");
var react_router_dom_1 = require("react-router-dom");
function Menu() {
    return (react_1["default"].createElement("div", { className: "header" },
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Home"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/NewYork" }, "NYC"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/TelAviv" }, "TelAviv"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/London" }, "London")));
}
exports["default"] = Menu;
