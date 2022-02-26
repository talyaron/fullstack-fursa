"use strict";
exports.__esModule = true;
var React = require("react");
var Button_1 = require("@mui/material/Button");
var TextField_1 = require("@mui/material/TextField");
require("./addCourse.scss");
var axios_1 = require("axios");
function AddCourse() {
    function handleAdd(ev) {
        ev.prevenntDefault();
        console.dir(ev.target);
        var form = ev.target;
        console.log(form[0]);
        axios_1["default"].post('http://localhost:3004/courses', { 'name': form[0].value, 'participants': form[2].value, 'lessons': form[3].value, 'cost': form[1].value }).then(function (_a) {
            var data = _a.data;
            return console.log(data);
        });
        alert("course added successfully");
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
