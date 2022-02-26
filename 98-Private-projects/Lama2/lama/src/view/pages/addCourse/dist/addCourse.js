"use strict";
exports.__esModule = true;
var React = require("react");
var Button_1 = require("@mui/material/Button");
var TextField_1 = require("@mui/material/TextField");
require("./addCourse.scss");
var react_1 = require("react");
var axios_1 = require("axios");
function AddCourse() {
    var _a = react_1.useState(''), name = _a[0], setName = _a[1];
    var _b = react_1.useState(), participants = _b[0], setParti = _b[1];
    var _c = react_1.useState(), lessons = _c[0], setLessons = _c[1];
    var _d = react_1.useState(), cost = _d[0], setCost = _d[1];
    function handleAdd(ev) {
        ev.prevenntDefault();
        console.dir(ev.target);
        var form = ev.target;
        axios_1["default"].post('http://localhost:3004/courses', { 'name': form[0].value, 'participants': form[2].value, 'lessons': form[3].value, 'cost': form[1].value }).then(function (_a) {
            var data = _a.data;
            return console.log(data);
        });
        // axios.post('http://localhost:3004/posts',{'title':'bad book'}).then(({data})=>console.log(data));
    }
    return (React.createElement("div", { className: "addCourse" },
        React.createElement("form", { onSubmit: handleAdd, className: "formAddCourse" },
            React.createElement(TextField_1["default"], { className: "txtfield1", autoComplete: "given-name", name: "Course Type", required: true, fullWidth: true, id: "courseType", label: "course type", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "txtfield1", autoComplete: "given-name", name: "Cost", required: true, fullWidth: true, id: "cost", label: "cost", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "txtfield1", autoComplete: "given-name", name: "participants", required: true, fullWidth: true, id: "participants", label: "participants", autoFocus: true }),
            "                  ",
            React.createElement(TextField_1["default"], { className: "txtfield1", autoComplete: "given-name", name: "lessons", required: true, fullWidth: true, id: "lessons", label: "lessons", autoFocus: true }),
            React.createElement(Button_1["default"], { className: 'addbtn', type: "submit" }, "Add"))));
}
exports["default"] = AddCourse;
