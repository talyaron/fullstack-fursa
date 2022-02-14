"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("main", null,
            React.createElement("h2", null, "Welcome to the homepage!"),
            React.createElement("p", null, "Our Products")),
        React.createElement("nav", null,
            React.createElement(react_router_dom_1.Link, { to: "/about" }, "About"))));
}
exports["default"] = Home;
