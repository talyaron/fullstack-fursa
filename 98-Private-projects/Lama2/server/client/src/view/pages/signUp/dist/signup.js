"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./signup.scss");
var React = require("react");
var Avatar_1 = require("@mui/material/Avatar");
var TextField_1 = require("@mui/material/TextField");
var LockOutlined_1 = require("@mui/icons-material/LockOutlined");
var Typography_1 = require("@mui/material/Typography");
var axios_1 = require("axios");
function SignUp() {
    function handleSignUp(ev) {
        ev.preventDefault();
        var form = ev.target;
        var obj = { firstName: form[0].value, lastName: form[1], email: form[2].value, password: form[3].value, phoneNumber: form[4].value };
        axios_1["default"].post('/user/add-new-user', { firstName: form[0].value, lastName: form[1], email: form[2].value, password: form[3].value, phoneNumber: form[4].value })
            .then(function (data) {
            console.log(data);
        })["catch"](function (err) {
            console.error(err);
        });
    }
    return (React.createElement("div", { className: "signup" },
        React.createElement(Avatar_1["default"], { className: 'avatar' },
            React.createElement(LockOutlined_1["default"], null)),
        React.createElement(Typography_1["default"], { component: "h3", variant: "h5", className: "typ" }, "Sign up"),
        React.createElement("form", { className: "signupform", onSubmit: handleSignUp },
            React.createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "firstName", required: true, fullWidth: true, id: "firstName", label: "First Name", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "lastName", required: true, fullWidth: true, id: "lastName", label: "Last Name", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "Email", required: true, fullWidth: true, id: "Email", label: "Email", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "passowrd", required: true, fullWidth: true, id: "passowrd", label: "Password", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "phone_number", required: true, fullWidth: true, id: "phone_number", label: "phone number", autoFocus: true }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(react_router_dom_1.Link, { to: "/signIn" },
                React.createElement("button", { className: 'subbtn', type: 'submit' }, "submit")))));
}
exports["default"] = SignUp;
