"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./index.scss");
function SignUp() {
    return (React.createElement("div", { className: "signup" },
        React.createElement("h2", null, "Sign Up"),
        React.createElement("p", null, "  User Name"),
        React.createElement("input", { type: "text" }),
        React.createElement("p", null, "Last Name"),
        React.createElement("input", { type: "text" }),
        React.createElement("p", null, "Email"),
        React.createElement("input", { type: "text" }),
        React.createElement("p", null, "Password"),
        React.createElement("input", { type: "text" }),
        React.createElement("p", null, "Confirm password"),
        React.createElement("input", { type: "text" }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(react_router_dom_1.Link, { to: "/signIn" },
            React.createElement("button", null, "submit"))));
}
exports["default"] = SignUp;
