"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_burger_menu_1 = require("react-burger-menu");
require("./SideBar.scss");
var food_png_1 = require("../../images/food.png");
var drink_png_1 = require("../../images/drink.png");
var dessert_png_1 = require("../../images/dessert.png");
var healthy_png_1 = require("../../images/healthy.png");
var salad_png_1 = require("../../images/salad.png");
var soup_png_1 = require("../../images/soup.png");
var pastry_jpg_1 = require("../../images/pastry.jpg");
function SideBar() {
    return (react_1["default"].createElement(react_burger_menu_1.slide, null,
        react_1["default"].createElement("div", { className: "menu-item" },
            react_1["default"].createElement("img", { src: food_png_1["default"], alt: "" }),
            ' ',
            "Food"),
        react_1["default"].createElement("div", { className: "menu-item" },
            react_1["default"].createElement("img", { src: drink_png_1["default"], alt: "" }),
            ' ',
            "Drinks"),
        react_1["default"].createElement("div", { className: "menu-item" },
            react_1["default"].createElement("img", { src: dessert_png_1["default"], alt: "" }),
            ' ',
            "Desserts"),
        react_1["default"].createElement("div", { className: "menu-item" },
            react_1["default"].createElement("img", { src: healthy_png_1["default"], alt: "" }),
            ' ',
            "Healthy"),
        react_1["default"].createElement("div", { className: "menu-item" },
            react_1["default"].createElement("img", { className: 'img1', src: salad_png_1["default"], alt: "" }),
            ' ',
            "Salads"),
        react_1["default"].createElement("div", { className: "menu-item" },
            react_1["default"].createElement("img", { src: soup_png_1["default"], alt: "" }),
            ' ',
            "Soups"),
        react_1["default"].createElement("div", { className: "menu-item" },
            react_1["default"].createElement("img", { src: pastry_jpg_1["default"], alt: "" }),
            ' ',
            "Pastries")));
}
exports["default"] = SideBar;
