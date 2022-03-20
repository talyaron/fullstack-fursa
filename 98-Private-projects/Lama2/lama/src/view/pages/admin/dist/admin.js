"use strict";
exports.__esModule = true;
var react_1 = require("react");
var db_json_1 = require("../../../../db.json");
var partInCourses = [
    {
        id: 1,
        courseid: 1,
        userid: 1,
        username: "aaaa"
    },
    {
        id: 1,
        courseid: 1,
        userid: 2,
        username: "bbb"
    },
    {
        id: 1,
        courseid: 1,
        userid: 3,
        username: "ccc"
    },
    {
        id: 1,
        courseid: 1,
        userid: 4,
        username: "ddd"
    },
    {
        id: 1,
        courseid: 2,
        userid: 2,
        username: "bbb"
    },
];
function Admin() {
    function JsonDataDisplay() {
        var DisplayData = db_json_1["default"].courses.map(function (info) {
            return (react_1["default"].createElement("tr", null,
                react_1["default"].createElement("td", null, info.id),
                react_1["default"].createElement("td", null, info.name),
                react_1["default"].createElement("td", null, info.participants),
                react_1["default"].createElement("td", null, info.cost)));
        });
    }
    var _a = react_1.useState(false), admin = _a[0], setAdmin = _a[1];
    var _b = react_1.useState({ text: "", phone: "" }), info = _b[0], setInfo = _b[1];
    var style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("button", { onClick: JsonDataDisplay }, "show details about courses"),
        react_1["default"].createElement("table", { className: "table table-striped" },
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("th", null, "Id"),
                    react_1["default"].createElement("th", null, "Name"),
                    react_1["default"].createElement("th", null, "Participants"),
                    react_1["default"].createElement("th", null, "Cost"))),
            react_1["default"].createElement("tbody", null))));
}
exports["default"] = Admin;
