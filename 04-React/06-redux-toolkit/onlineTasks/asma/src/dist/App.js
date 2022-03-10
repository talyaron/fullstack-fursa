"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PicturesShow_1 = require("./features/pictures/PicturesShow");
require("./App.css");
///import PicShow from './features/pictures/PicShow';
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement(PicturesShow_1["default"], null))));
}
exports["default"] = App;
