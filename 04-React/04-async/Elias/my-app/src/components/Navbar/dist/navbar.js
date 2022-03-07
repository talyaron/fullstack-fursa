"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./navbar.scss");
function navbar() {
    return (react_1["default"].createElement("div", { className: 'navbar' },
        react_1["default"].createElement("div", { className: 'sec' },
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/' }, "NY")),
        react_1["default"].createElement("div", { className: ' sec' },
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/TA' }, "TA")),
        react_1["default"].createElement("div", { className: ' sec' },
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/London' }, "London"))));
}
exports["default"] = navbar;
