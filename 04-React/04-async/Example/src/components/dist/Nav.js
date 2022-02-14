"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Nav = function () {
    return (react_1["default"].createElement("ul", null,
        react_1["default"].createElement("li", null,
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/' }, "Landing")),
        react_1["default"].createElement("li", null,
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/main/signUp' }, "Signup"))));
};
exports["default"] = Nav;
