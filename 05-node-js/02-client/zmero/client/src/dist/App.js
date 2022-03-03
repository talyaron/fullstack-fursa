"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
//components
var Card_1 = require("./view/components/card/Card");
var students = [
    { name: 'Saleem', place: 'Mashad', img: 'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1' },
    { name: 'Mona', place: "Nazereth", img: 'https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200' },
    { name: 'Saleem', place: 'Mashad', img: 'https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1' },
    { name: 'Mona', place: "Nazereth", img: 'https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200' }
];
function App() {
    var _a = react_1.useState(0), genralCounter = _a[0], setGeneralCounter = _a[1];
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("h1", null,
                "Number of counts:",
                genralCounter),
            students.map(function (student, index) {
                var name = student.name, place = student.place, img = student.img; //deconstractor 
                return react_1["default"].createElement(Card_1["default"], { key: index, info: { name: name, place: place, img: img }, setGeneralCounter: setGeneralCounter, genralCounter: genralCounter });
            }))));
}
exports["default"] = App;
