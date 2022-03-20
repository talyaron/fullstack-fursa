"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var menu_1 = require("./view/components/menu/menu");
function App() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(menu_1["default"], null),
        react_1["default"].createElement("div", { className: "App" },
            react_1["default"].createElement("h1", null, "welcome in the most popular web application to know the weather temperature around the world "))));
}
exports["default"] = App;
