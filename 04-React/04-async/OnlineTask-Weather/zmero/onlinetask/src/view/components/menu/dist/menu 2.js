"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./menu.scss");
var react_router_dom_1 = require("react-router-dom");
function Menu() {
    return (react_1["default"].createElement("div", { className: "nav" },
        react_1["default"].createElement("img", { src: "https://img.icons8.com/office/30/000000/partly-cloudy-day--v1.png" }),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Home"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/NewYork" }, "NYC"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/TelAviv" }, "TelAviv"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/London" }, "London")));
}
exports["default"] = Menu;
