"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./Nav.scss");
function Nav() {
    return (react_1["default"].createElement("nav", null,
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/expenses" }, "Expenses"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/invoices" }, "Invoices"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: '/store' }, "Store")));
}
exports["default"] = Nav;
