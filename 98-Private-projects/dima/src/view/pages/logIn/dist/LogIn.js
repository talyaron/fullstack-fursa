"use strict";
exports.__esModule = true;
require("./LogIn.scss");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("../../../App");
var background_jpg_1 = require("../../background.jpg");
var logo_jpg_1 = require("../../logo.jpg");
function LogIn() {
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("img", { className: "image", src: background_jpg_1["default"], alt: "" }),
        React.createElement("div", { className: 'LogInBox' },
            React.createElement("img", { className: "logo", src: logo_jpg_1["default"], alt: "" }),
            React.createElement("h1", null,
                "Welcome ",
                React.createElement("br", null),
                " to Recipes App"),
            React.createElement("h3", null, "Sign In"),
            React.createElement(material_1.Box, { component: "form", sx: { '& .MuiTextField-root': { m: 1 } } },
                React.createElement(App_1.CssTextField, { label: "E-mail Address", focused: true, id: "custom-css-outlined-input", defaultValue: "", size: "small" }),
                React.createElement(App_1.CssTextField, { label: "Password", focused: true, id: "custom-css-outlined-input", defaultValue: "", size: "small" }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(react_router_dom_1.Link, { to: 'MainScreen' },
                    React.createElement("button", { type: "submit" }, "Log In"))),
            React.createElement("br", null),
            React.createElement(react_router_dom_1.Link, { to: 'ResetPassword' }, "Forget Password ?"),
            React.createElement("p", null,
                "New in Recipes App ? ",
                React.createElement(react_router_dom_1.Link, { to: 'SignUp' },
                    React.createElement("span", null, "Sign Up Now"))))));
}
exports["default"] = LogIn;
