"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Box_1 = require("@material-ui/core/Box");
var FormControl_1 = require("@material-ui/core/FormControl");
var Select_1 = require("@material-ui/core/Select");
var InputLabel_1 = require("@material-ui/core/InputLabel");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var core_1 = require("@material-ui/core");
function MessagesBetweenOrg() {
    var _a = react_1.useState(""), org = _a[0], setOrg = _a[1];
    var _b = react_1.useState(""), user = _b[0], setUser = _b[1];
    var orgArr = ['org1', 'org2', 'org3'];
    var userArr = ['user1', 'user2', 'user3'];
    function handleClick() { }
    return (react_1["default"].createElement("div", { className: 'container' },
        react_1["default"].createElement("div", { className: "info" },
            react_1["default"].createElement(Box_1["default"], { className: "box", sx: { width: 200 } },
                react_1["default"].createElement(FormControl_1["default"], { fullWidth: true },
                    react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "Pick Organization"),
                    react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select", value: org, onChange: function (e) { return setOrg(e.target.value); } }, orgArr.map(function (item, index) {
                        return (react_1["default"].createElement(MenuItem_1["default"], { value: "org" }, item));
                    })))),
            react_1["default"].createElement(Box_1["default"], { className: "box", sx: { width: 200 } },
                react_1["default"].createElement(FormControl_1["default"], { fullWidth: true },
                    react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "Pick User"),
                    react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select", value: user, onChange: function (e) { return setUser(e.target.value); } }, userArr.map(function (item, index) {
                        return (react_1["default"].createElement(MenuItem_1["default"], { value: "user" }, item));
                    })))),
            react_1["default"].createElement(core_1.Button, { className: "button", onClick: handleClick, variant: "contained" }, "Send Meassage"))));
}
exports["default"] = MessagesBetweenOrg;
