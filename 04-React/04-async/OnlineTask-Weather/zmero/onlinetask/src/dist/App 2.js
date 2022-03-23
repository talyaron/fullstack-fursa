"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var menu_1 = require("./view/components/menu/menu");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(menu_1["default"], null),
        react_1["default"].createElement("div", { className: "background" })));
}
exports["default"] = App;
