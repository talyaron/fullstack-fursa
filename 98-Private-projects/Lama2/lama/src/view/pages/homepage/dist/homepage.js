"use strict";
exports.__esModule = true;
require("./homepage.scss");
var React = require("react");
var react_1 = require("react");
var courses_1 = require("../courses/courses");
var horses = [{ name: 'Zoro', age: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnVjp6dcfqRT0CGg5Q89VXbV0RsfJ-Y9png&usqp=CAU' },
    { name: 'Ice', age: 6, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxcYVFc1xSuH9jgYeJgDXsVw0P7KdnX53UA&usqp=CAU' }];
function Homepage() {
    var _a = react_1.useState("Zoro"), names = _a[0], Setname = _a[1];
    var _b = react_1.useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yr60poUFJojpky70RI6hrTBtWx5Dm3ifwQ&usqp=CAU"), pics = _b[0], Setphoto = _b[1];
    var names2 = ["Simba", "Ice", "Gucci", "Sun", "Ben"];
    function changename(e) {
        e.preventDefault();
        var nameInArr = names2[Math.floor(Math.random() * names2.length)];
        Setname(nameInArr);
    }
    return (React.createElement("div", { className: 'maindiv' },
        React.createElement("h3", { className: "h" }, "Welcome to our farm"),
        React.createElement("p", { className: "firstP" }, "Our course duration is 5 weeks, one lesson a week ."),
        React.createElement(courses_1["default"], null),
        React.createElement("div", { className: "ani" },
            React.createElement("div", { className: 'animation' }))));
}
exports["default"] = Homepage;
