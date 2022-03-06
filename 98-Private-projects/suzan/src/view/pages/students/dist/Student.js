"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
function Student(student) {
    var _a = student.info, firstName = _a.firstName, lastName = _a.lastName, father = _a.father, mother = _a.mother, id = _a.id, phone = _a.phone, fphone = _a.fphone, mphone = _a.mphone, email = _a.email;
    return (React.createElement(react_router_dom_1.Link, { to: "/students/" + id },
        React.createElement("div", { className: "student" },
            React.createElement("p", { className: "student__name" },
                firstName,
                " ",
                lastName),
            React.createElement("p", null, " - "),
            React.createElement("p", { className: "student__id" }, id))));
}
exports["default"] = Student;
