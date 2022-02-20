"use strict";
exports.__esModule = true;
var Button_1 = require("@mui/material/Button");
var Login_1 = require("@mui/icons-material/Login");
var Google_1 = require("@mui/icons-material/Google");
var react_router_dom_1 = require("react-router-dom");
require("./signin.scss");
var Typography_1 = require("@mui/material/Typography");
function SignIn() {
    return (React.createElement("div", { className: 'signin' },
        React.createElement("img", { className: "icon", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwQXPGGUkeJfNF9_zBIWGlYeatiFav_Cemw&usqp=CAU", alt: "" }),
        React.createElement(Typography_1["default"], { component: "h2", variant: "h5" }, "Sign in"),
        React.createElement("p", null, "Email"),
        React.createElement("input", { type: "text" }),
        React.createElement("p", null, "Password"),
        React.createElement("input", { type: "text" }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(Button_1["default"], { className: 'btn', size: "small", variant: "outlined", startIcon: React.createElement(Google_1["default"], null) }, " Google"),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(react_router_dom_1.Link, { to: "/data" },
            React.createElement(Button_1["default"], { className: 'btn', size: "small", variant: "outlined", startIcon: React.createElement(Login_1["default"], null) }, " admin ")),
        React.createElement("br", null),
        React.createElement(react_router_dom_1.Link, { to: "/" },
            React.createElement(Button_1["default"], { className: 'btn', size: "small", variant: "outlined", startIcon: React.createElement(Login_1["default"], null) }, " login ")),
        React.createElement("br", null)));
}
exports["default"] = SignIn;
