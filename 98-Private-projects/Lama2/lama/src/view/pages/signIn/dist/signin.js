"use strict";
exports.__esModule = true;
var Button_1 = require("@mui/material/Button");
var Login_1 = require("@mui/icons-material/Login");
var Google_1 = require("@mui/icons-material/Google");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
require("./signin.scss");
var TextField_1 = require("@mui/material/TextField");
var react_google_login_1 = require("react-google-login");
var clientId = "Your-Client-Id";
function SignIn() {
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
        react_1["default"].createElement("img", { className: "icon", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwQXPGGUkeJfNF9_zBIWGlYeatiFav_Cemw&usqp=CAU", alt: "" }),
        react_1["default"].createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "Email", required: true, fullWidth: true, id: "Email", label: "Email", autoFocus: true }),
        react_1["default"].createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "passowrd", required: true, fullWidth: true, id: "passowrd", label: "Password", autoFocus: true }),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(Button_1["default"], { className: 'btn', size: "small", variant: "outlined", startIcon: react_1["default"].createElement(Google_1["default"], null) }, " Google"),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/admincourses" },
            react_1["default"].createElement(Button_1["default"], { className: 'btn', size: "small", variant: "outlined", startIcon: react_1["default"].createElement(Login_1["default"], null) }, " admin ")),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
            react_1["default"].createElement(Button_1["default"], { className: 'btn', size: "small", variant: "outlined", startIcon: react_1["default"].createElement(Login_1["default"], null) }, " login ")),
        react_1["default"].createElement("br", null),
        showloginButton ?
            react_1["default"].createElement(react_google_login_1.GoogleLogin, { clientId: clientId, buttonText: "Sign In", onSuccess: onLoginSuccess, onFailure: onLoginFailure, cookiePolicy: 'single_host_origin', isSignedIn: true }) : null,
        showlogoutButton ?
            react_1["default"].createElement(react_google_login_1.GoogleLogout, { clientId: clientId, buttonText: "Sign Out", onLogoutSuccess: onSignoutSuccess }) : null));
}
exports["default"] = SignIn;
