"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Nav_1 = require("../../components/nav/Nav");
function Coats() {
    return (React.createElement("div", null,
        React.createElement(Nav_1["default"], null),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "div" }, "1"),
            React.createElement("div", { className: "div" }, "1"),
            React.createElement("div", { className: "div" }, "1"),
            React.createElement("div", { className: "div" }, "1")),
        React.createElement("h1", null, "Coats"),
        React.createElement(react_router_dom_1.Link, { to: '/Coats' }, "Coats")));
}
exports["default"] = Coats;
