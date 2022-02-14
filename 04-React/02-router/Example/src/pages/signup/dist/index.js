"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var Input_1 = require("../../components/Input");
var PageHeader_1 = require("../../components/PageHeader");
var Textarea_1 = require("../../components/Textarea");
var Select_1 = require("../../components/Select");
var warning_svg_1 = require("../../assets/images/icons/warning.svg");
require("./style.css");
function Signup(props) {
    var setCounter = props.setCounter, counter = props.counter;
    var _a = react_1.useState([
        { week_day: 1, from: '8:00 AM', to: '4:00 PM' }
    ]), scheduleItem = _a[0], setScheduleItem = _a[1];
    { }
    function addNewScheduleItem() {
        setScheduleItem(__spreadArrays(scheduleItem, [
            {
                week_day: 1, from: ' ', to: ' '
            }
        ]));
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { id: "page-LogIn-form" },
            react_1["default"].createElement(PageHeader_1.PageHeader, { title: "Let the journey Begin", description: "Please Fill all the feilds" }),
            react_1["default"].createElement("div", { className: "counter" }, counter),
            react_1["default"].createElement("main", null,
                react_1["default"].createElement("fieldset", null,
                    react_1["default"].createElement("legend", null, "private information "),
                    react_1["default"].createElement(Input_1.Input, { name: "name", label: "complete name" }),
                    react_1["default"].createElement(Input_1.Input, { name: "email", label: "email" }),
                    react_1["default"].createElement(Input_1.Input, { name: "Phone number", label: "Phone Number" }),
                    react_1["default"].createElement(Input_1.Input, { type: "date", name: "Birthday", label: "Birthday" }),
                    react_1["default"].createElement(Textarea_1.Textarea, { name: 'bio', label: 'about yourself' })),
                react_1["default"].createElement("fieldset", null,
                    react_1["default"].createElement("legend", null, "the pourpus "),
                    react_1["default"].createElement(Select_1.Select, { name: "subject", label: "This is for: ", options: [
                            { value: 'Myself', label: 'Myself' },
                            { value: 'college', label: 'college' },
                            { value: 'Work', label: 'Work' },
                            { value: 'learn', label: 'learn' },
                        ] }),
                    react_1["default"].createElement(Input_1.Input, { name: "cost", label: "specify school or college:" })),
                react_1["default"].createElement("footer", null,
                    react_1["default"].createElement("p", null,
                        react_1["default"].createElement("img", { src: warning_svg_1["default"], alt: 'Terms and consditions' }),
                        "Importante to read the terms & conditions",
                        react_1["default"].createElement("br", null)),
                    react_1["default"].createElement("button", { type: "button" }, " Open"))))));
}
exports["default"] = Signup;
