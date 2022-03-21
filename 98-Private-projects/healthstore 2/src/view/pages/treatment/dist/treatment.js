"use strict";
exports.__esModule = true;
require("./treatment.scss");
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var EventNoteTwoTone_1 = require("@material-ui/icons/EventNoteTwoTone");
function Treatment(props) {
    var name = props.name, img = props.img, text = props.text;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "treatment" },
            react_1["default"].createElement("h1", null, name),
            react_1["default"].createElement("img", { src: img }),
            react_1["default"].createElement("p", null, text),
            react_1["default"].createElement(core_1.Button, { className: "button", href: "/calendar", variant: "contained", startIcon: react_1["default"].createElement(EventNoteTwoTone_1["default"], null) }, "Book Appointment"))));
}
exports["default"] = Treatment;
