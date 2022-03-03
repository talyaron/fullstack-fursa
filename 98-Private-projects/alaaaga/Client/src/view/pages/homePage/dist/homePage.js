"use strict";
exports.__esModule = true;
require("./homePage.scss");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var homePage = function () {
    return (react_1["default"].createElement("div", { className: 'warpper' },
        react_1["default"].createElement("div", null,
            "welcome to Abo Ali onlineMarket ",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/Login" }, "Sign IN "),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/signUp" }, "Sign UP"),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/AboutUs" }, "About Us"))));
};
exports["default"] = homePage;
