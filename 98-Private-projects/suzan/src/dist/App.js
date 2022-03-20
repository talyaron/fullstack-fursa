"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var react_router_dom_1 = require("react-router-dom");
var classes_1 = require("./view/pages/classes/classes");
var Students_1 = require("./view/pages/students/Students");
var StudentInfo_1 = require("./view/pages/students/StudentInfo");
var Teachers_1 = require("./view/pages/teachers/Teachers");
var SchoolsEvents_1 = require("./view/pages/schoolsEvents/SchoolsEvents");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(classes_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "students", element: react_1["default"].createElement(Students_1["default"], null) },
                react_1["default"].createElement(react_router_dom_1.Route, { path: ":studentId", element: react_1["default"].createElement(StudentInfo_1["default"], null) })),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "teachers", element: react_1["default"].createElement(Teachers_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "schoolsEvents", element: react_1["default"].createElement(SchoolsEvents_1["default"], null) }))));
}
exports["default"] = App;
