"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./course.scss");
var Course = function (props) {
    var name = props.name, id = props.id;
    return (React.createElement(react_router_dom_1.Link, { to: "/courses/" + id },
        React.createElement("div", { className: "course" }, name)));
};
exports["default"] = Course;
