"use strict";
exports.__esModule = true;
require("./course.scss");
var React = require("react");
var header_1 = require("../../components/header/header");
var react_router_dom_1 = require("react-router-dom");
//components
var course_1 = require("./course");
var courses = [{ id: 1, name: 'course1' }, { id: 2, name: 'course2' }, { id: 3, name: 'course3' }];
function Courses() {
    return (React.createElement("div", { className: "maindiv" },
        React.createElement(header_1["default"], null),
        React.createElement("h3", null, "Courses and private lessons"),
        React.createElement("div", { className: "courses" },
            courses.map(function (course, i) {
                return React.createElement(course_1["default"], { key: i, name: course.name, id: course.id });
            }),
            React.createElement(react_router_dom_1.Outlet, null)),
        ";"));
}
exports["default"] = Courses;
