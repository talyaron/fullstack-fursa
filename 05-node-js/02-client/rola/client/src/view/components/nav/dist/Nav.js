"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
function Nav() {
    return (React.createElement("nav", null,
        React.createElement(react_router_dom_1.Link, { to: "/second" }),
        React.createElement(react_router_dom_1.Link, { to: "/third" })));
}
exports["default"] = Nav;
