"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var MainHeader_1 = require("../../components/main header/MainHeader");
var SearchBar_1 = require("../../components/searchBar/SearchBar");
var Student_1 = require("./Student");
var react_1 = require("react");
function Students() {
    // const students:Array<studentInfo> = [
    //     {info: {firstName:'Maria', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'111111111', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}},
    //     {info: {firstName:'Suzan', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'222222222', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}},
    //     {info: {firstName:'Suzan', lastName:'Kassabry', father:'Emad', mother:'Linda', id:'333333333', phone:'0537756048', fphone:'0537756048', mphone:'0537756048', email:'suzankassabry97@gmail.com'}}
    // ]
    var _a = react_1.useState([]), students = _a[0], setStudents = _a[1];
    react_1.useEffect(function () {
        console.log('useEffect');
        fetch('/get-all-students').then(function (res) { return res.json(); }).then(function (data) {
            setStudents(data);
            console.log(data);
        });
    }, []);
    return (React.createElement("div", null,
        React.createElement("header", { className: "App-header" },
            React.createElement(MainHeader_1["default"], null)),
        React.createElement(SearchBar_1["default"], null),
        React.createElement("div", { className: "wrapper" },
            React.createElement("div", { className: "left" }, students.map(function (student, index) {
                //const {info: {firstName, lastName, father, mother, id, phone, fphone, mphone, email}} = student;
                return React.createElement(Student_1["default"], { key: index, info: student });
            })),
            React.createElement("div", { className: "right" },
                React.createElement(react_router_dom_1.Outlet, null))),
        React.createElement(react_router_dom_1.Link, { to: '/' }, "go to main page")));
}
exports["default"] = Students;
