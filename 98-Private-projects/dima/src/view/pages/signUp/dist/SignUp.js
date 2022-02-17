"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
require("./SignUp.scss");
function SignUp() {
    return (React.createElement("div", { className: "SignUpBox" },
        React.createElement("h1", null, "Create New Account"),
        React.createElement("form", null,
            React.createElement("p", null, "Name"),
            React.createElement("input", { type: "text", placeholder: "Insert your name" }),
            React.createElement("p", null, "E-mail Address"),
            React.createElement("input", { type: "text", placeholder: "Insert your email" }),
            React.createElement("p", null, "Password"),
            React.createElement("input", { type: "text", placeholder: "Insert a password" }),
            React.createElement("p", null, "Confirm Password"),
            React.createElement("input", { type: "text", placeholder: "Confirm your password" }),
            React.createElement(material_1.TextField, { label: "Phone Number", focused: true, sx: { height: '10%' } }),
            React.createElement("button", { type: "submit" }))));
}
exports["default"] = SignUp;
