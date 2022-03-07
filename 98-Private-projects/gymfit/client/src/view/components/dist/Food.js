"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("./Header");
var BottomNav_1 = require("./BottomNav");
var Menu_1 = require("./Menu");
var Search_1 = require("./Search");
var ImagesBox_1 = require("./ImagesBox");
function Food() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Menu_1["default"], null),
        react_1["default"].createElement("div", { className: "Middle" },
            react_1["default"].createElement(Header_1["default"], null),
            react_1["default"].createElement(BottomNav_1["default"], null),
            react_1["default"].createElement(Search_1["default"], { title: "search for food", items: meals }),
            react_1["default"].createElement(ImagesBox_1["default"], null))));
}
exports["default"] = Food;
var meals = [
    { title: 'Smoked salmon', year: 1994 },
    { title: 'Whole eggs', year: 1994 },
    { title: 'Ricotta', year: 1994 },
    { title: 'Cottage cheese', year: 1994 },
    { title: 'Sweet potatoes', year: 1994 },
    { title: 'Herbal tea', year: 1994 },
    { title: 'Whole-grain bread', year: 1994 },
    { title: 'Quinoa', year: 1994 },
    { title: ' Jerky', year: 1994 },
    { title: 'Homemade protein smoothies', year: 1994 },
    { title: 'Milk', year: 1994 },
    { title: 'Rice', year: 1994 },
    { title: 'Nuts and nut butters', year: 1994 },
    { title: 'Red meats', year: 1994 },
    { title: 'Potatoes and starches', year: 1994 },
    { title: 'Salmon and oily fish', year: 1994 },
    { title: 'Dried fruit', year: 1994 },
    { title: 'Avocados', year: 1994 },
];
