"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var courses = [{ id: 1, name: 'course1' }, { id: 2, name: 'course2' }, { id: 3, name: 'course3' }];
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
        react_1["default"].createElement("h1", null,
            "Name: ",
            getCourseName(courseId, courses),
            " "),
        react_1["default"].createElement("p", null,
            " Course ",
            courseId)));
};
exports["default"] = Course;
