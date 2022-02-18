"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./signup.scss");
var React = require("react");
var Avatar_1 = require("@mui/material/Avatar");
var TextField_1 = require("@mui/material/TextField");
var LockOutlined_1 = require("@mui/icons-material/LockOutlined");
var Typography_1 = require("@mui/material/Typography");
function SignUp() {
    return (React.createElement("div", { className: "signup" },
        React.createElement(Avatar_1["default"], { className: 'avatar' },
            React.createElement(LockOutlined_1["default"], null)),
        React.createElement(Typography_1["default"], { component: "h1", variant: "h5" }, "Sign up"),
        React.createElement("form", null,
            React.createElement(TextField_1["default"], { className: "txtfield", autoComplete: "given-name", name: "firstName", required: true, fullWidth: true, id: "firstName", label: "First Name", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "txtfield", autoComplete: "given-name", name: "lastName", required: true, fullWidth: true, id: "lastName", label: "Last Name", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "txtfield", autoComplete: "given-name", name: "Email", required: true, fullWidth: true, id: "Email", label: "Email", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "txtfield", autoComplete: "given-name", name: "passowrd", required: true, fullWidth: true, id: "passowrd", label: "Email", autoFocus: true }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(react_router_dom_1.Link, { to: "/signIn" },
                React.createElement("button", null, "submit")))));
}
exports["default"] = SignUp;
