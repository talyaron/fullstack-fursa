"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navbar_1 = require("../../components/navbar/navbar");
require("./ProfileInfo.scss");
function ProfileInfo() {
    return (react_1["default"].createElement("div", { className: "ProfileInfo" },
        react_1["default"].createElement(navbar_1["default"], null),
        react_1["default"].createElement("div", { className: "ProfileInfo__content" },
            react_1["default"].createElement("p", null, "Profile"))));
}
exports["default"] = ProfileInfo;
