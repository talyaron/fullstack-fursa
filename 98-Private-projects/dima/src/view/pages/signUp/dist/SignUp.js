"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
require("./SignUp.scss");
var App_1 = require("../../../App");
var ArrowBackSharp_1 = require("@mui/icons-material/ArrowBackSharp");
var react_router_dom_1 = require("react-router-dom");
var background_jpg_1 = require("../../images/background.jpg");
var logo_jpg_1 = require("../../images/logo.jpg");
function SignUp() {
    return (React.createElement("div", { className: "signUp" },
        React.createElement("img", { className: "image", src: background_jpg_1["default"], alt: "" }),
        React.createElement("div", { className: "SignUpBox" },
            React.createElement(react_router_dom_1.Link, { to: '/' },
                React.createElement(ArrowBackSharp_1["default"], null)),
            React.createElement("div", { className: "content" },
                React.createElement("img", { className: "logo", src: logo_jpg_1["default"], alt: "" }),
                React.createElement("h1", null, "Create Your Account"),
                React.createElement(material_1.Box, { component: "form", sx: { '& .MuiTextField-root': { m: 1 } } },
                    React.createElement(App_1.CssTextField, { label: "Name", focused: true, id: "custom-css-outlined-input", defaultValue: "", size: "small" }),
                    React.createElement(App_1.CssTextField, { label: "E-mail Address", focused: true, id: "custom-css-outlined-input", defaultValue: "", size: "small" }),
                    React.createElement(App_1.CssTextField, { label: "Password", focused: true, id: "custom-css-outlined-input", defaultValue: "", size: "small" }),
                    React.createElement(App_1.CssTextField, { label: "Confirm Password", focused: true, id: "custom-css-outlined-input", defaultValue: "", size: "small" }),
                    React.createElement(App_1.CssTextField, { label: "Phone Number", focused: true, id: "custom-css-outlined-input", defaultValue: "", size: "small" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(react_router_dom_1.Link, { to: '/' },
                        React.createElement("button", { type: "submit" }, "Sign Up")))))));
}
exports["default"] = SignUp;
