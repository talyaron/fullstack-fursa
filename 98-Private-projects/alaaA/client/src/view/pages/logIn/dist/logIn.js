"use strict";
exports.__esModule = true;
require("./logIn.scss");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Login = function () {
    return (react_1["default"].createElement("div", { className: 'warpper' },
        react_1["default"].createElement("div", null,
            "Login ",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            "Username ",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("input", { type: "text" }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            "Password ",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("input", { type: "password" }),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/Group" }, "Login"),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/HomePage" }, "cancle"))));
};
exports["default"] = Login;
