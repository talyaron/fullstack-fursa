"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
require("./courseRegistration.scss");
var react_1 = require("react");
var react_2 = require("react");
require("react-calendar/dist/Calendar.css");
var react_router_dom_1 = require("react-router-dom");
var react_datetime_picker_1 = require("react-datetime-picker");
var Box_1 = require("@mui/material/Box");
var InputLabel_1 = require("@mui/material/InputLabel");
var MenuItem_1 = require("@mui/material/MenuItem");
var FormControl_1 = require("@mui/material/FormControl");
var Select_1 = require("@mui/material/Select");
var TextField_1 = require("@mui/material/TextField");
var Button_1 = require("@mui/material/Button");
require("react-datetime-picker/dist/DateTimePicker.css");
require("react-datepicker/dist/react-datepicker.css");
var coursesRegis = [
    {
        start: new Date(2022, 3, 22, 4, 30),
        end: new Date(2022, 3, 22, 5, 30),
        name: "lama",
        course: "Group lessons"
    }
];
function CourseRegistration() {
    var _a = react_1["default"].useState(''), course = _a[0], setCourse = _a[1];
    var _b = react_2.useState(new Date()), dateState = _b[0], setDateState = _b[1];
    var _c = react_2.useState(new Date()), startDate = _c[0], setStateDate = _c[1];
    var _d = react_2.useState(new Date()), date = _d[0], setDate = _d[1];
    var _e = react_2.useState(new Date()), value = _e[0], onChange = _e[1];
    var _f = react_2.useState(new Date()), endDate = _f[0], setEndDate = _f[1];
    var _g = react_2.useState({ name: "", start: new Date(), end: new Date(), course: "" }), registration = _g[0], setRegistration = _g[1];
    var _h = react_2.useState(coursesRegis), allReg = _h[0], setAllReg = _h[1];
    var dt = new Date(2022, 3, 22, 7, 30);
    var maxTime = dt.setDate(dt.getDate() + 5);
    var includeDatesArray = [new Date('02-25-2022'), new Date('02-26-2022')];
    var changeDate = function (e) {
        setDateState(e);
    };
    function handleRegistration() {
        setAllReg(__spreadArrays(allReg, [registration]));
        console.log(allReg);
    }
    var handleChange = function (event) {
        setCourse(event.target.value);
    };
    return (react_1["default"].createElement("div", { className: 'mydiv' },
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
            react_1["default"].createElement("button", { className: 'backbtn' }, "back ")),
        react_1["default"].createElement("div", { className: 'inputDiv' },
            react_1["default"].createElement(Box_1["default"], { className: 'mybox', sx: { minWidth: 120 } },
                react_1["default"].createElement(FormControl_1["default"], { required: true, fullWidth: true },
                    react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "Course"),
                    react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select", value: course, label: "Course", onChange: handleChange },
                        react_1["default"].createElement(MenuItem_1["default"], { value: 10 }, "Group lessons"),
                        react_1["default"].createElement(MenuItem_1["default"], { value: 20 }, "Private lessons"),
                        react_1["default"].createElement(MenuItem_1["default"], { value: 30 }, "single lesson")))),
            react_1["default"].createElement(TextField_1["default"], { className: "txtfield", autoComplete: "given-name", name: "Name", required: true, id: "Name", label: "Name", autoFocus: true })),
        react_1["default"].createElement(react_datetime_picker_1["default"], { onChange: onChange, value: value }),
        react_1["default"].createElement(Button_1["default"], { variant: "contained", className: "regBtn" }, "register")));
}
exports["default"] = CourseRegistration;
