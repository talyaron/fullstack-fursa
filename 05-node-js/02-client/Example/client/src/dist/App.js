<<<<<<< HEAD
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
=======
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
    react_1.useEffect(function () {
        fetch('/get-all-users').then(function (res) { return res.json(); }).then(function (data) {
            console.log(data);
            setPpls(data);
        });
    }, []);
    var _a = react_1.useState([]), ppls = _a[0], setPpls = _a[1];
    var _b = react_1.useState(0), genralCounter = _b[0], setGeneralCounter = _b[1];
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            ppls.map(function (ppl, index) {
                return React.createElement("p", { key: index }, ppl.name);
            }),
            React.createElement("h1", null,
                "Number of counts:",
                genralCounter),
            students.map(function (student, index) {
                var name = student.name, place = student.place, img = student.img; //deconstractor 
                return React.createElement(Card_1["default"], { key: index, info: { name: name, place: place, img: img }, setGeneralCounter: setGeneralCounter, genralCounter: genralCounter });
            }))));
}
exports["default"] = App;
>>>>>>> tal
