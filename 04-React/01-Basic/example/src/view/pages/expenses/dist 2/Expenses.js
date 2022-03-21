"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Nav_1 = require("../../components/nav/Nav");
function Expenses() {
    return (React.createElement("div", null,
        React.createElement(Nav_1["default"], null),
        React.createElement("h1", null, "Expenses!"),
        React.createElement(react_router_dom_1.Link, { to: '/invoices' }, "Invoices")));
}
exports["default"] = Expenses;
