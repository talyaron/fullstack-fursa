"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Navbar.scss");
var Burger_1 = require("./Burger");
var react_router_dom_1 = require("react-router-dom");
var Navbar = function () {
    var navigate = react_router_dom_1.useNavigate();
    return (react_1["default"].createElement("div", { className: 'nav' },
        react_1["default"].createElement("div", { className: "backb", onClick: function () { return navigate(-1); } },
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("i", { className: "arrow-left" }))),
        react_1["default"].createElement(Burger_1["default"], null)));
};
exports["default"] = Navbar;
