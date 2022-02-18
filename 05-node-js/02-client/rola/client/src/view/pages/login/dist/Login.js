"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Nav_1 = require("../../components/nav/Nav");
function Second() {
    return (React.createElement("div", null,
        React.createElement(Nav_1["default"], null),
        React.createElement(react_router_dom_1.Link, { to: '/homepage' }, " Return to HOME PAGE "),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(react_router_dom_1.Link, { to: '/store' }, "Go To Store")));
}
exports["default"] = Second;
