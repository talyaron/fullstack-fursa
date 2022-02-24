"use strict";
exports.__esModule = true;
var React = require("react");
var TextField_1 = require("@mui/material/TextField");
require("./addCourse.scss");
function AddCourse() {
    return (React.createElement("div", { className: "addCourse" },
        React.createElement("form", { className: "formAddCourse", action: "" },
            React.createElement(TextField_1["default"], { className: "txtfield1", autoComplete: "given-name", name: "Course Type", required: true, fullWidth: true, id: "courseType", label: "course type", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "txtfield1", autoComplete: "given-name", name: "Cost", required: true, fullWidth: true, id: "cost", label: "cost", autoFocus: true }))));
}
exports["default"] = AddCourse;
