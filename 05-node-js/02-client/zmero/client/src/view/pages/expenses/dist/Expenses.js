"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var Nav_1 = require("../../components/nav/Nav");
function Expenses() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Nav_1["default"], null),
        react_1["default"].createElement("h1", null, "Expenses!"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: '/invoices' }, "Invoices")));
}
exports["default"] = Expenses;
