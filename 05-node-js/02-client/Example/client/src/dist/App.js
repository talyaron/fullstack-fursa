"use strict";
exports.__esModule = true;
require("./App.scss");
//components
var Card_1 = require("./view/components/card/Card");
var students = [{ name: 'Saleem', place: 'Mashad' }, { name: 'Mona', place: "Nazereth" }];
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" }, students.map(function (student, index) {
            return React.createElement(Card_1["default"], { key: index, title: student.name, place: student.place });
        }))));
}
exports["default"] = App;
