"use strict";
exports.__esModule = true;
require("./course.scss");
var Course = function (props) {
    var name = props.name, id = props.id, hours = props.hours, lessons = props.lessons, participants = props.participants, cost = props.cost;
    return (React.createElement("div", { className: "course" },
        name,
        React.createElement("br", null),
        hours,
        " hours",
        React.createElement("br", null),
        lessons,
        " lessons",
        React.createElement("br", null),
        participants,
        " participants",
        React.createElement("br", null),
        "cost :",
        cost));
};
exports["default"] = Course;
