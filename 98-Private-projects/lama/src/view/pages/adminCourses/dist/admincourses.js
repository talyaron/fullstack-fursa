"use strict";
exports.__esModule = true;
require("./admincourses.scss");
var Button_1 = require("@mui/material/Button");
var react_router_dom_1 = require("react-router-dom");
var ButtonGroup_1 = require("@mui/material/ButtonGroup");
var Courses = [
    {
        id: 1,
        name: "group lessons",
        participants: 10,
        cost: 1000
    },
    {
        id: 2,
        name: "private lessons",
        participants: 1,
        cost: 1200
    },
    {
        id: 3,
        name: "single lesson",
        participants: 1,
        cost: 100
    },
];
function AdminCourses() {
    function JsonDataDisplay() {
        var DisplayData = Courses.map(function (info) {
            return (React.createElement("tr", null,
                React.createElement("td", null, info.id),
                React.createElement("td", null, info.name),
                React.createElement("td", null, info.participants),
                React.createElement("td", null, info.cost)));
        });
    }
    return (React.createElement("div", null,
        React.createElement(react_router_dom_1.Link, { to: "/" },
            React.createElement(Button_1["default"], { className: 'backbtn', variant: "outlined", onClick: function () {
                    alert('clicked');
                } }, " back")),
        React.createElement("h4", null, "courses"),
        React.createElement("div", { className: 'tablediv' },
            React.createElement("table", { className: "table table-striped" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Id"),
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "participants"),
                        React.createElement("th", null, "Cost"),
                        React.createElement("th", null, "Edit/Add"))),
                React.createElement("tbody", null, Courses.map(function (info) {
                    return (React.createElement("tr", null,
                        React.createElement("td", null, info.id),
                        React.createElement("td", null, info.name),
                        React.createElement("td", null, info.participants),
                        React.createElement("td", null, info.cost),
                        React.createElement("td", null,
                            React.createElement(ButtonGroup_1["default"], { className: 'grpbtn', variant: "contained", "aria-label": "outlined small button group" },
                                React.createElement(Button_1["default"], null, "Add"),
                                React.createElement(Button_1["default"], null, "Edit"),
                                React.createElement(Button_1["default"], null, "Delete")))));
                }))))));
}
exports["default"] = AdminCourses;
