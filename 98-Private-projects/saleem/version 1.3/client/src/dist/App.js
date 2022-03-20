"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./assets/styles/global.css");
var routers_1 = require("./routers");
function App() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(routers_1["default"], null)));
}
exports["default"] = App;
