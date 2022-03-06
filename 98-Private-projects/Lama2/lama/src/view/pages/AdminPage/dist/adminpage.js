"use strict";
exports.__esModule = true;
require("./adminpage.scss");
var Button_1 = require("@mui/material/Button");
var react_router_dom_1 = require("react-router-dom");
function AdminPage() {
    return (React.createElement("div", null,
        React.createElement("p", null, "aaaaaaaaaaaaaa"),
        React.createElement(react_router_dom_1.Link, { to: "/data" },
            React.createElement(Button_1["default"], { className: 'backbtn', variant: "outlined" }, " manage courses")),
        React.createElement(react_router_dom_1.Link, { to: "/admincourses" },
            React.createElement(Button_1["default"], { className: 'backbtn', variant: "outlined" }, " manage participants in courses"))));
}
exports["default"] = AdminPage;
