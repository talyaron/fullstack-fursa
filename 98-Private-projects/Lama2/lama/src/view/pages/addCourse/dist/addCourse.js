"use strict";
exports.__esModule = true;
var React = require("react");
var Button_1 = require("@mui/material/Button");
var TextField_1 = require("@mui/material/TextField");
require("./addCourse.scss");
var axios_1 = require("axios");
function AddCourse() {
    function handleAdd() {
        axios_1["default"].put('http://localhost:3004/courses/', { 'name': 'group lessons', 'participants': 12, 'lessons': 10, 'cost': 1200 }).then(function (_a) {
            var data = _a.data;
            return console.log(data);
        });
        // axios.post('http://localhost:3004/posts',{'title':'bad book'}).then(({data})=>console.log(data));
    }
    return (React.createElement("div", { className: "addCourse" },
        React.createElement("form", { className: "formAddCourse", action: "" },
            React.createElement(TextField_1["default"], { className: "txtfield1", autoComplete: "given-name", name: "Course Type", required: true, fullWidth: true, id: "courseType", label: "course type", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "txtfield1", autoComplete: "given-name", name: "Cost", required: true, fullWidth: true, id: "cost", label: "cost", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "txtfield1", autoComplete: "given-name", name: "participants", required: true, fullWidth: true, id: "participants", label: "participants", autoFocus: true }),
            "                  ",
            React.createElement(TextField_1["default"], { className: "txtfield1", autoComplete: "given-name", name: "lessons", required: true, fullWidth: true, id: "lessons", label: "lessons", autoFocus: true }),
            React.createElement(Button_1["default"], { onClick: handleAdd, className: 'addbtn' }, "Add"))));
}
exports["default"] = AddCourse;
