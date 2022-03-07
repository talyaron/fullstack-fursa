"use strict";
exports.__esModule = true;
var Button_1 = require("@mui/material/Button");
var Login_1 = require("@mui/icons-material/Login");
var Google_1 = require("@mui/icons-material/Google");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
// import './signin2.scss';
var TextField_1 = require("@mui/material/TextField");
//import Admin from '../admin/admin';
function SignIn2() {
    var _a = react_1.useState(true), showloginButton = _a[0], setShowloginButton = _a[1];
    var _b = react_1.useState(false), showlogoutButton = _b[0], setShowlogoutButton = _b[1];
    var onLoginSuccess = function (res) {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };
    var onLoginFailure = function (res) {
        console.log('Login Failed:', res);
    };
    var onSignoutSuccess = function () {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };
    var responseGoogle = function (response) {
        console.log(response);
    };
    return (react_1["default"].createElement("div", { className: 'signin' },
        react_1["default"].createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "Email", required: true, fullWidth: true, id: "Email", label: "Email", autoFocus: true }),
        react_1["default"].createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "passowrd", required: true, fullWidth: true, id: "passowrd", label: "Password", autoFocus: true }),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("button", null, " forgot password?  "),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(Button_1["default"], { className: 'btn', size: "small", variant: "outlined", startIcon: react_1["default"].createElement(Google_1["default"], null) }, " Google"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
            react_1["default"].createElement(Button_1["default"], { className: 'btn', size: "small", variant: "outlined", startIcon: react_1["default"].createElement(Login_1["default"], null) }, " login ")),
        react_1["default"].createElement("br", null)));
}
exports["default"] = SignIn2;
