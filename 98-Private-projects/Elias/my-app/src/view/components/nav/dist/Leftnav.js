"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Group_143_png_1 = require("../../../icons/Group 143.png");
require("./Leftnav.scss");
var Leftnav = function (props) {
    var Open = props.Open;
    console.log(Open);
    if (Open)
        return (react_1["default"].createElement("ul", { className: 'Opned' },
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("img", { src: Group_143_png_1["default"], alt: "" })),
            react_1["default"].createElement("li", null, "profile pic"),
            react_1["default"].createElement("li", null, "Edit Profile"),
            react_1["default"].createElement("li", null, "Settings"),
            react_1["default"].createElement("li", null, "Sign Out"),
            react_1["default"].createElement("li", null, "Contact us"),
            react_1["default"].createElement("li", null, "About"),
            react_1["default"].createElement("li", null, "Rate the app")));
    else
        return (react_1["default"].createElement("ul", { className: 'Closed' },
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("img", { src: Group_143_png_1["default"], alt: "" })),
            react_1["default"].createElement("li", null, "profile pic"),
            react_1["default"].createElement("li", null, "Edit Profile"),
            react_1["default"].createElement("li", null, "Settings"),
            react_1["default"].createElement("li", null, "Sign Out"),
            react_1["default"].createElement("li", null, "Contact us"),
            react_1["default"].createElement("li", null, "About"),
            react_1["default"].createElement("li", null, "Rate the app")));
};
exports["default"] = Leftnav;
