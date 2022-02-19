"use strict";
exports.__esModule = true;
// import  './course.scss';
require("./courses.scss");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var header_1 = require("../../components/header/header");
var react_router_dom_2 = require("react-router-dom");
//components
var course_1 = require("./course");
var courses = [{ id: 1, name: 'group lessons' }, { id: 2, name: 'private lessons' }, { id: 3, name: 'single lesson' }];
function Courses() {
    return (React.createElement("div", { className: "maindiv" },
        React.createElement(header_1["default"], null),
        React.createElement("h3", null, "Courses and private lessons"),
        React.createElement(react_router_dom_1.Link, { to: "/calender" },
            React.createElement("button", { className: 'calbtn' }, "Register ")),
        React.createElement("div", { className: "courses" },
            courses.map(function (course, i) {
                return React.createElement(course_1["default"], { key: i, name: course.name, id: course.id });
            }),
            React.createElement(react_router_dom_2.Outlet, null)),
        ";"));
}
exports["default"] = Courses;
