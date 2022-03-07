"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./course.scss");
var Course = function (props) {
    var name = props.name, id = props.id, hours = props.hours, participants = props.participants, cost = props.cost;
    return (React.createElement(react_router_dom_1.Link, { to: "/" },
        React.createElement("div", { className: "course" },
            name,
            React.createElement("p", null,
                hours,
                " hours"),
            React.createElement("p", null,
                participants,
                " participants"),
            React.createElement("p", null,
                "cost :",
                cost))));
};
exports["default"] = Course;
