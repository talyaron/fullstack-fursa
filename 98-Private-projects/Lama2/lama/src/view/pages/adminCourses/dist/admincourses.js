"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
require("./admincourses.scss");
var react_2 = require("react");
var Button_1 = require("@mui/material/Button");
var react_router_dom_1 = require("react-router-dom");
var ButtonGroup_1 = require("@mui/material/ButtonGroup");
var adminHeader_1 = require("../../components/adminHeader/adminHeader");
function AdminCourses() {
    var _a = react_2.useState([{ id: 0, name: "", participants: 0, lessons: 0, cost: 0 }]), details = _a[0], setDetails = _a[1];
    react_1.useEffect(function () {
        axios_1["default"].get('http://localhost:3004/courses').then(function (_a) {
            var data = _a.data;
            return setDetails(data);
        });
    }, []);
    function handleDelete(event) {
        event.preventDefault();
        var id = event.target.value;
        axios_1["default"]["delete"]("http://localhost:3004/courses/" + id)
            .then(function (res) {
            console.log(res);
            console.log(res.data);
        });
    }
    return (React.createElement("div", { className: 'admCouDiv' },
        React.createElement(adminHeader_1["default"], null),
        React.createElement("h4", null, "courses"),
        React.createElement("div", { className: 'tablediv' },
            React.createElement("table", { className: "table table-striped" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Id"),
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "participants"),
                        React.createElement("th", null, "lessons"),
                        React.createElement("th", null, "Cost"),
                        React.createElement("th", null, "Edit/Delete"))),
                React.createElement("tbody", null, details.map(function (info, index) {
                    return (React.createElement("tr", { key: index },
                        React.createElement("td", null, info.id),
                        React.createElement("td", null, info.name),
                        React.createElement("td", null, info.participants),
                        React.createElement("td", null, info.lessons),
                        React.createElement("td", null, info.cost),
                        React.createElement("td", null,
                            React.createElement(ButtonGroup_1["default"], { className: 'grpbtn', variant: "contained", "aria-label": "outlined small button group" },
                                React.createElement(Button_1["default"], null, "Edit"),
                                React.createElement(Button_1["default"], { onClick: handleDelete }, "Delete")))));
                })))),
        React.createElement(react_router_dom_1.Link, { to: "/addCourse" },
            "    ",
            React.createElement(Button_1["default"], { className: 'addbtn' }, "Add new course"),
            " ")));
}
exports["default"] = AdminCourses;
