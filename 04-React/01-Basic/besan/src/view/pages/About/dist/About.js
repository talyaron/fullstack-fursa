"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
function About() {
    return (React.createElement(React.Fragment, null,
        React.createElement("main", null,
            React.createElement("h2", null, "Who are we?"),
            React.createElement("p", null, "ahlan ya")),
        React.createElement("nav", null,
            React.createElement(react_router_dom_1.Link, { to: "/" }, "Home"))));
}
exports["default"] = About;
