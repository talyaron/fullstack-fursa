"use strict";
exports.__esModule = true;
require("./homePage.scss");
var react_1 = require("react");
var clothes = [{ name: 'WOOL BLEND HIGH NECK COAT', price: 500, img: 'https://static.zara.net/photos///2022/V/0/1/p/2096/289/802/2/w/830/2096289802_1_1_1.jpg?ts=1637256490476' },
    { name: 'COAT WITH DETACHABLE FAUX FUR DETAIL ON THE COLLAR', price: 200, img: 'https://static.zara.net/photos///2022/V/0/1/p/2179/289/704/2/w/1126/2179289704_1_1_1.jpg?ts=1640000139595' }];
function HomePage() {
    return (react_1["default"].createElement("div", { className: "homePage" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("img", { src: "https://i.pinimg.com/originals/68/05/ef/6805ef9b55da5090985bcaf8d0130097.gif", alt: "" }))));
}
exports["default"] = HomePage;