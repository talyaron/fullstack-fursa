"use strict";
exports.__esModule = true;
var React = require("react");
require("./register.scss");
var Box_1 = require("@mui/material/Box");
var InputLabel_1 = require("@mui/material/InputLabel");
var MenuItem_1 = require("@mui/material/MenuItem");
var FormControl_1 = require("@mui/material/FormControl");
var Select_1 = require("@mui/material/Select");
var TextField_1 = require("@mui/material/TextField");
function Register() {
    var _a = React.useState(''), course = _a[0], setCourse = _a[1];
    var handleChange = function (event) {
        setCourse(event.target.value);
    };
    return (React.createElement("div", { className: 'register' },
        React.createElement(Box_1["default"], { sx: { minWidth: 120 } },
            React.createElement(FormControl_1["default"], { required: true, fullWidth: true },
                React.createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "Course"),
                React.createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select", value: course, label: "Course", onChange: handleChange },
                    React.createElement(MenuItem_1["default"], { value: 10 }, "Group lessons"),
                    React.createElement(MenuItem_1["default"], { value: 20 }, "Private lessons"),
                    React.createElement(MenuItem_1["default"], { value: 30 }, "single lesson")))),
        React.createElement(TextField_1["default"], { className: "txtfield", autoComplete: "given-name", name: "Name", required: true, fullWidth: true, id: "Name", label: "Name", autoFocus: true })));
}
exports["default"] = Register;
