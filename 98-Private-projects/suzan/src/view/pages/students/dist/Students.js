"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var MainHeader_1 = require("../../components/main header/MainHeader");
var SearchBar_1 = require("../../components/searchBar/SearchBar");
var Student_1 = require("./Student");
function Students() {
    var arr = [
        { info: { firstName: 'Suzan', lastName: 'Kassabry', father: 'Emad', mother: 'Linda', id: '207745638', phone: '0537756048', fphone: '0537756048', mphone: '0537756048', email: 'suzankassabry97@gmail.com' } },
        { info: { firstName: 'Maria', lastName: 'Kassabry', father: 'Emad', mother: 'Linda', id: '218439247', phone: '0537756048', fphone: '0537756048', mphone: '0537756048', email: 'suzankassabry97@gmail.com' } },
        { info: { firstName: 'Nora', lastName: 'Kassabry', father: 'Emad', mother: 'Linda', id: '634892469', phone: '0537756048', fphone: '0537756048', mphone: '0537756048', email: 'suzankassabry97@gmail.com' } }
    ];
    return (React.createElement("div", null,
        React.createElement("header", { className: "App-header" },
            React.createElement(MainHeader_1["default"], null)),
        React.createElement(SearchBar_1["default"], null),
        React.createElement("div", { className: "wrapper" },
            React.createElement("div", { className: "left" }, arr.map(function (student, index) {
                //const {info: {firstName, lastName, father, mother, id, phone, fphone, mphone, email}} = student;
                return React.createElement(Student_1["default"], { key: index, info: student.info });
            })),
            React.createElement("div", { className: "right" },
                React.createElement(react_router_dom_1.Outlet, null)))));
}
exports["default"] = Students;
