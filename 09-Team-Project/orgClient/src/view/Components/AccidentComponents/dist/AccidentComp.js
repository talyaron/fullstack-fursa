"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./AccidentComp.scss");
function AccidentComp(props) {
    var connect = props.connect, details = props.details, notifications = props.notifications;
    function handleComp() {
        console.log("clicked!");
    }
    return (react_1["default"].createElement("div", { className: 'AccidentCompContainer', onClick: handleComp },
        react_1["default"].createElement("div", { className: "firstConnect" }, connect),
        react_1["default"].createElement("div", { className: "accidentDetails" },
            react_1["default"].createElement("div", { className: "targetName" }, details.name),
            react_1["default"].createElement("div", { className: "accidentDetails_details" }, details.content)),
        react_1["default"].createElement("div", { className: "notifications" }, notifications)));
}
exports["default"] = AccidentComp;
