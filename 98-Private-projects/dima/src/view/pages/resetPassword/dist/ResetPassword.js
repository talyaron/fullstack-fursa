"use strict";
exports.__esModule = true;
require("./ResetPassword.scss");
var material_1 = require("@mui/material");
var App_1 = require("../../../App");
var ArrowBackSharp_1 = require("@mui/icons-material/ArrowBackSharp");
var react_router_dom_1 = require("react-router-dom");
function ResetPassword() {
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("img", { className: "image", src: "https://img.freepik.com/free-photo/purple-marble-texture-natural-pattern-with-high-resolution-background-design-art-work_38607-277.jpg?w=996", alt: "" }),
        React.createElement("div", { className: "Box" },
            React.createElement(react_router_dom_1.Link, { to: '/' },
                React.createElement(ArrowBackSharp_1["default"], null)),
            React.createElement("div", { className: "content" },
                React.createElement("img", { className: "logo", src: "https://i.etsystatic.com/25426477/c/1724/1370/88/206/il/33fb1e/3155023191/il_340x270.3155023191_710b.jpg", alt: "" }),
                React.createElement("h1", null, "Reset Your Password"),
                React.createElement(material_1.Box, { component: "form", sx: { '& .MuiTextField-root': { m: 1 } } },
                    React.createElement(App_1.CssTextField, { label: "E-mail Address", focused: true, id: "custom-css-outlined-input", defaultValue: "", size: "small" }),
                    React.createElement(App_1.CssTextField, { label: "New Password", focused: true, id: "custom-css-outlined-input", defaultValue: "", size: "small" }),
                    React.createElement(App_1.CssTextField, { label: "Confirm Password", focused: true, id: "custom-css-outlined-input", defaultValue: "", size: "small" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(react_router_dom_1.Link, { to: '/' },
                        React.createElement("button", { type: "submit" }, "Reset")))))));
}
exports["default"] = ResetPassword;
