"use strict";
exports.__esModule = true;
require("./createGroup.scss");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var createGroup = function () {
    function handelSubmit(ev) {
    }
    return (react_1["default"].createElement("div", { className: 'warpper' },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", null, " Create new Group "),
            " ",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("form", { onSubmit: handelSubmit },
                "Group Name: ",
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("input", { type: "text" }),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("br", null),
                "Members :  ",
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("input", { type: "email", placeholder: 'min 3 mumbers' }),
                " ",
                react_1["default"].createElement("button", null, "add"),
                react_1["default"].createElement(react_router_dom_1.Link, { type: 'submit', to: "/Store" }, "Login")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/HomePage" }, "cancle"))));
};
exports["default"] = createGroup;
