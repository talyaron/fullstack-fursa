"use strict";
exports.__esModule = true;
// import  './course.scss';
require("./courses.scss");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
//components
var course_1 = require("./course");
var courses = [{ id: 1, name: 'group lessons', hours: 5, lessons: 10, participants: 10, cost: 1000 },
    { id: 2, name: 'private lessons', hours: 5, lessons: 10, participants: 1, cost: 1200 },
    { id: 3, name: 'single lesson', hours: 0.5, lessons: 1, participants: 1, cost: 110 }];
var cardcourses = [{ id: 1, hours: 5, participants: 10, cost: 1000 },
    { id: 2, hours: 5, participants: 1, cost: 1200 },
    { id: 3, hours: 5, participants: 1, cost: 100 }];
function Courses() {
    return (React.createElement("div", { className: "maindiv" },
        React.createElement("h3", null, "Courses and private lessons"),
        React.createElement("div", { className: "courses" },
            courses.map(function (course, i) {
                return React.createElement(course_1["default"], { key: i, name: course.name, id: course.id, hours: course.hours, lessons: course.lessons, participants: course.participants, cost: course.cost });
            }),
            React.createElement(react_router_dom_1.Outlet, null))));
}
exports["default"] = Courses;
