"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
function Navbar() {
    return (React.createElement("nav", null,
        React.createElement(react_router_dom_1.Link, { to: "/london" }, "London"),
        React.createElement(react_router_dom_1.Link, { to: "/newYork" }, "NewYork"),
        React.createElement(react_router_dom_1.Link, { to: "/telAviv" }, "TelAviv")));
}
exports["default"] = Navbar;
