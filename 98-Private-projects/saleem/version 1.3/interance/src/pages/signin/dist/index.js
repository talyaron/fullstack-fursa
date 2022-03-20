"use strict";
exports.__esModule = true;
exports.Signin = void 0;
var react_1 = require("react");
var Input_1 = require("../../components/Input");
var PageHeader_1 = require("../../components/PageHeader");
var react_router_dom_1 = require("react-router-dom");
require("./style.css");
function Signin() {
    return (react_1["default"].createElement("div", { id: "page-login" },
        react_1["default"].createElement(PageHeader_1.PageHeader, { title: "Login " },
            react_1["default"].createElement("form", { action: "", id: "Login" })),
        react_1["default"].createElement("main", null,
            react_1["default"].createElement(Input_1.Input, { name: "name", label: "Email" }),
            react_1["default"].createElement(Input_1.Input, { type: "password", name: "email", label: "password" }),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/pages/Dashboard" }, "About"),
            react_1["default"].createElement("button", null, "Log in"))));
}
exports.Signin = Signin;
