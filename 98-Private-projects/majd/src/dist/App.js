"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Bar_1 = require("./view-components-bar/Bar");
var bar = [{ title: 'Home', subtitle: '1' }, { title: 'Our Programs', subtitle: '2' }, { title: 'About us', subtitle: '3' }, { title: 'Staff', subtitle: '4' }];
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "mb-2" }, bar.map(function (item, index) {
            return react_1["default"].createElement(Bar_1["default"], { key: index, title: item.title, subtitle: item.subtitle });
        }))));
}
exports["default"] = App;
