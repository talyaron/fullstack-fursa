"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var courses = [{ id: 1, name: 'group lessons', hours: 5, participants: 10, cost: 1000 }, { id: 2, name: 'private lessons', hours: 5, participants: 1, cost: 1200 }, { id: 3, name: 'single lesson', hours: 5, participants: 1, cost: 100 }];
var Course = function () {
    var courseId = react_router_dom_1.useParams().courseId;
    function getCourseName(id, courses) {
        var course = courses.find(function (course) { return course.id == id; });
        if (course) {
            return course.name;
        }
        else {
            return '';
        }
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h4", null,
            getCourseName(courseId, courses),
            " "),
        react_1["default"].createElement("p", null,
            " Course ",
            courseId)));
};
exports["default"] = Course;
