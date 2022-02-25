"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
require("./data.scss");
var react_2 = require("react");
var Button_1 = require("@mui/material/Button");
var react_router_dom_1 = require("react-router-dom");
var Delete_1 = require("@mui/icons-material/Delete");
var ButtonGroup_1 = require("@mui/material/ButtonGroup");
function Data() {
    var _a = react_2.useState([]), details = _a[0], setDetails = _a[1];
    var _b = react_2.useState([{ courseid: 0, userid: 0, username: "" }]), courses = _b[0], setCourses = _b[1];
    axios_1["default"].get('http://localhost:3004/courses').then(function (_a) {
        var data = _a.data;
        return console.log(data);
    });
    axios_1["default"].get('http://localhost:3004/participants').then(function (_a) {
        var data = _a.data;
        return console.log(data);
    });
    react_1.useEffect(function () {
        axios_1["default"].get('http://localhost:3004/participants').then(function (_a) {
            var data = _a.data;
            setDetails(data);
        });
    }, []);
    return (React.createElement("div", null,
        React.createElement(react_router_dom_1.Link, { to: "/" },
            React.createElement(Button_1["default"], { className: 'backbtn', variant: "outlined", onClick: function () {
                    alert('clicked');
                } }, " back")),
        React.createElement("h4", null, "participants in courses"),
        React.createElement("div", { className: 'tablediv' },
            React.createElement("table", { className: "table table-striped" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Course Id"),
                        React.createElement("th", null, "User Id"),
                        React.createElement("th", null, "User Name"),
                        React.createElement("th", null, "Edit/Add"))),
                React.createElement("tbody", null, details.map(function (rest, index) {
                    return (React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement(ButtonGroup_1["default"], { className: 'grpbtn', variant: "contained", "aria-label": "outlined small button group" },
                                React.createElement(Button_1["default"], null, "Add"),
                                React.createElement(Button_1["default"], null, "Edit"),
                                React.createElement(Button_1["default"], null, "Delete")))));
                })))),
        React.createElement("br", null),
        React.createElement(Button_1["default"], { variant: "outlined", startIcon: React.createElement(Delete_1["default"], null) }, "Delete"),
        React.createElement("p", null,
            "the course details : ",
            details)));
}
exports["default"] = Data;
