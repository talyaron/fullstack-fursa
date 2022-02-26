"use strict";
exports.__esModule = true;
require("./App.scss");
var react_1 = require("react");
//components
var Card_1 = require("./view/components/card/Card");
var menu_1 = require("./view/components/menu/menu");
var clothes = [{ name: 'WOOL BLEND HIGH NECK COAT', price: 500, img: 'https://static.zara.net/photos///2022/V/0/1/p/2096/289/802/2/w/830/2096289802_1_1_1.jpg?ts=1637256490476' },
    { name: 'COAT WITH DETACHABLE FAUX FUR DETAIL ON THE COLLAR', price: 200, img: 'https://static.zara.net/photos///2022/V/0/1/p/2179/289/704/2/w/1126/2179289704_1_1_1.jpg?ts=1640000139595' }];
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement(menu_1["default"], null),
            clothes.map(function (item1, index) {
                var name = item1.name, price = item1.price, img = item1.img;
                return react_1["default"].createElement(Card_1["default"], { key: index, info: { name: name, price: price, img: img } });
            }))));
}
exports["default"] = App;
