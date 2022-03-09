"use strict";
exports.__esModule = true;
var React = require("react");
var Button_1 = require("@mui/material/Button");
var TextField_1 = require("@mui/material/TextField");
require("./addCourse.scss");
var react_1 = require("react");
var axios_1 = require("axios");
function AddCourse() {
    var _a = react_1.useState([]), courses = _a[0], setCourses = _a[1];
    react_1.useEffect(function () {
        //fetch courses
        fetch('/get-all-courses')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setCourses(data.courses);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    function addCourse(ev) {
        ev.preventDefault();
        var form = ev.target;
        var obj = { name: form[0].value, cost: form[1].value, participants: form[2].value, lessons: form[3].value, hours: form[4].value };
        axios_1["default"].post('/courses/add-new-course', { name: form[0].value, cost: form[1].value, participants: form[2].value, lessons: form[3].value, hours: form[4].value })
            .then(function (data) {
            console.log(data);
        })["catch"](function (err) {
            console.error(err);
        });
    }
    function handleAdd(ev) {
        ev.prevenntDefault();
        console.dir(ev.target);
        var form = ev.target;
        console.log(form[0]);
        axios_1["default"].post('http://localhost:3004/courses', { 'name': form[0].value, 'participants': form[2].value, 'lessons': form[3].value, 'cost': form[1].value }).
            then(function (_a) {
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
            React.createElement(Button_1["default"], { className: 'addbtn', type: "submit" }, "Add")),
        React.createElement("form", { onSubmit: addCourse },
            React.createElement("input", { type: "text", placeholder: 'insert course name', name: 'courseName' }),
            React.createElement("input", { type: "number", name: "cost", placeholder: 'insert course"s cost' }),
            React.createElement("input", { type: "number", name: "participants", placeholder: 'insert participants number' }),
            React.createElement("input", { type: "number", name: "lessons", placeholder: ' how many lessons' }),
            React.createElement("input", { type: "number", name: "hours", placeholder: 'how much hours' }),
            React.createElement("button", { type: 'submit' }, "Add")),
        React.createElement("h1", null, "courses"),
        courses.map(function (course) {
            return React.createElement("p", { key: course._id }, course.name);
        })));
}
exports["default"] = AddCourse;
