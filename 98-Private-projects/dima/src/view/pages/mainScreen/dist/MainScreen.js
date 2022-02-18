"use strict";
exports.__esModule = true;
require("./MainScreen.scss");
var menu_1 = require("../../components/menuBar/menu");
function MainScreen() {
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("div", { className: 'menuBar' },
            React.createElement(menu_1["default"], null))
    //Add new component
    ,
        "//Add new component"));
}
exports["default"] = MainScreen;
