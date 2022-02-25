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
var adminHeader_1 = require("../../components/adminHeader/adminHeader");
function Data() {
    var _a = react_2.useState([{ courseid: 0, userid: 0, username: "" }]), details = _a[0], setDetails = _a[1];
    var _b = react_2.useState([{ courseid: 0, userid: 0, username: "" }]), courses = _b[0], setCourses = _b[1];
    //  axios.get('http://localhost:3004/courses').then(({data})=>console.log(data));
    // axios.get('http://localhost:3004/participants').then(({ data }) => setDetails(data));
    function handleData() {
        axios_1["default"].get('http://localhost:3004/participants').then(function (_a) {
            var data = _a.data;
            return setDetails(data);
        });
    }
    react_1.useEffect(function () {
        axios_1["default"].get('http://localhost:3004/participants').then(function (_a) {
            var data = _a.data;
            return setDetails(data);
        });
    }, []);
    return (React.createElement("div", { className: 'dataDiv' },
        React.createElement(adminHeader_1["default"], null),
        React.createElement(react_router_dom_1.Link, { to: "/" },
            React.createElement(Button_1["default"], { className: 'backbtn', variant: "outlined", onClick: function () {
                    alert('clicked');
                } }, " back")),
        React.createElement("h4", null, "user in courses management"),
        React.createElement("div", { className: 'tablediv' },
            React.createElement("table", { className: "table table-striped" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Course Id"),
                        React.createElement("th", null, "User Id"),
                        React.createElement("th", null, "User Name"),
                        React.createElement("th", null, "Edit/Add"))),
                React.createElement("tbody", null, details.map(function (info, index) {
                    return (React.createElement("tr", { key: index },
                        React.createElement("td", null, info.courseid),
                        React.createElement("td", null, info.userid),
                        React.createElement("td", null, info.username),
                        React.createElement("td", null,
                            React.createElement(ButtonGroup_1["default"], { className: 'grpbtn', variant: "contained", "aria-label": "outlined small button group" },
                                React.createElement(Button_1["default"], null, "Edit"),
                                React.createElement(Button_1["default"], null, "Delete")))));
                })))),
        React.createElement(Button_1["default"], { variant: "outlined", startIcon: React.createElement(Delete_1["default"], null) }, "Delete")));
}
exports["default"] = Data;
