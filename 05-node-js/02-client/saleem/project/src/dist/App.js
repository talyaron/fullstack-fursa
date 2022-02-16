"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var header_component_1 = require("./components/header/header.component");
var hero_component_1 = require("./components/hero/hero.component");
var Item_1 = require("./components/item/Item");
function App() {
    var _a = react_1.useState([]), data = _a[0], setData = _a[1];
    var _b = react_1.useState(0), cartCount = _b[0], setcartCount = _b[1];
    react_1.useEffect(function () {
        fetch('/get-all-users').then(function (res) { return res.json(); }).then(function (data) {
            console.log(data);
            setData(data);
        });
    }, []);
    function addToCart(event) {
        console.log(event.target.dataset.id);
        var index = parseInt(event.target.dataset.id);
        var tempData = data;
        tempData[index].cart = true;
        setcartCount(cartCount + 1);
        setData(tempData);
    }
    function removeFromCart(event) {
        var index = parseInt(event.target.dataset.id);
        var tempData = data;
        tempData[index].cart = false;
        if (cartCount > 0) {
            setcartCount(cartCount - 1);
        }
        setData(tempData);
    }
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(header_component_1["default"], { count: cartCount }),
        react_1["default"].createElement(hero_component_1["default"], null),
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "row" }, data.map(function (item, index) { return (react_1["default"].createElement(Item_1["default"], { index: index, add: addToCart, remove: removeFromCart, id: item.id, title: item.title, price: item.price, incart: item.cart })); })))));
}
exports["default"] = App;
