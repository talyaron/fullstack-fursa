"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
require("./data.scss");
var react_1 = require("react");
var Button_1 = require("@mui/material/Button");
var react_router_dom_1 = require("react-router-dom");
var Delete_1 = require("@mui/icons-material/Delete");
var ButtonGroup_1 = require("@mui/material/ButtonGroup");
var partInCourses = [
    {
        id: 1,
        courseid: 1,
        userid: 1,
        username: "aaaa"
    },
    {
        id: 2,
        courseid: 1,
        userid: 2,
        username: "bbb"
    },
    {
        id: 3,
        courseid: 1,
        userid: 3,
        username: "ccc"
    },
    {
        id: 4,
        courseid: 1,
        userid: 4,
        username: "ddd"
    },
    {
        id: 5,
        courseid: 2,
        userid: 2,
        username: "bbb"
    },
];
function Data() {
    // const [details, setdetails] = useState<Array<{ value: string }>>([]);
    var _a = react_1.useState([{ id: 0, name: "", participants: 0, cost: 0 }]), details = _a[0], setdetails = _a[1];
    function JsonDataDisplay() {
        var DisplayData = partInCourses.map(function (info) {
            return (React.createElement("tr", null,
                React.createElement("td", null, info.id),
                React.createElement("td", null, info.courseid),
                React.createElement("td", null, info.userid),
                React.createElement("td", null, info.username)));
        });
    }
    function handleAxios() {
        // axios.get('http://localhost:3004/courses').then(({data})=>setdetails(data));
        //    console.log(data);
        axios_1["default"].get('http://localhost:3004/courses/1').then(function (_a) {
            var data = _a.data;
            return setdetails(data);
        });
        // axios.post('http://localhost:3004/posts',{'title':'bad book'}).then(({data})=>console.log(data));
        //axios.put('http://localhost:3004/posts/2',{'title':'best book', author:'best author'}).then(({data})=>console.log(data));
        // axios.patch('http://localhost:3004/posts/2',{ author:'best ever author'}).then(({data})=>console.log(data));
        // axios.patch('http://localhost:3004/posts/2', {readers:['Jame',"bob", 'alis']}).then(({data})=>console.log(data))
        // axios.delete('http://localhost:3004/posts/3').then(({data})=>console.log(data));
    }
    function Deletedata() {
        axios_1["default"].get('http://localhost:3004/courses').then(function (_a) {
            var data = _a.data;
            return console.log(data);
        });
    }
    var numbers = ['course1', 'course2', 'course3'];
    var listItems = numbers.map(function (number) {
        return React.createElement("li", null, number);
    });
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
                        React.createElement("th", null, "Id"),
                        React.createElement("th", null, "Course Id"),
                        React.createElement("th", null, "User Id"),
                        React.createElement("th", null, "User Name"),
                        React.createElement("th", null, "Edit/Add"))),
                React.createElement("tbody", null, partInCourses.map(function (info) {
                    return (React.createElement("tr", null,
                        React.createElement("td", null, info.id),
                        React.createElement("td", null, info.courseid),
                        React.createElement("td", null, info.userid),
                        React.createElement("td", null, info.username),
                        React.createElement("td", null,
                            React.createElement(ButtonGroup_1["default"], { className: 'grpbtn', variant: "contained", "aria-label": "outlined small button group" },
                                React.createElement(Button_1["default"], null, "Add"),
                                React.createElement(Button_1["default"], null, "Edit"),
                                React.createElement(Button_1["default"], null, "Delete")))));
                })))),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(Button_1["default"], { variant: "outlined", startIcon: React.createElement(Delete_1["default"], null) }, "Delete")));
}
exports["default"] = Data;
