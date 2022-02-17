"use strict";
exports.__esModule = true;
var add_png_1 = require("./add.png");
var _1_jpg_1 = require("./1.jpg");
var _2_jpg_1 = require("./2.jpg");
var _3_jpg_1 = require("./3.jpg");
var _4_jpg_1 = require("./4.jpg");
var _5_jpg_1 = require("./5.jpg");
require("./recipes.scss");
function Recipes() {
    return (React.createElement("div", { className: "recipes" },
        React.createElement("h2", { className: 'title' }, "Recipes"),
        React.createElement("div", { className: "row1" },
            React.createElement("div", { className: "item" },
                React.createElement("div", { className: 'itemImg' },
                    React.createElement("img", { src: _1_jpg_1["default"], alt: "" })),
                React.createElement("div", { className: 'title' },
                    React.createElement("p", null, "recipe 1"))),
            React.createElement("div", { className: "item" },
                React.createElement("div", { className: 'itemImg' },
                    React.createElement("img", { src: _2_jpg_1["default"], alt: "" })),
                React.createElement("div", { className: 'title' },
                    React.createElement("p", null, "recipe 2"))),
            React.createElement("div", { className: "item" },
                React.createElement("div", { className: 'itemImg' },
                    React.createElement("img", { src: _3_jpg_1["default"], alt: "" })),
                React.createElement("div", { className: 'title' },
                    React.createElement("p", null, "recipe 3")))),
        React.createElement("div", { className: "row2" },
            React.createElement("div", { className: "item" },
                React.createElement("div", { className: 'itemImg' },
                    React.createElement("img", { src: _4_jpg_1["default"], alt: "" })),
                React.createElement("div", { className: 'title' },
                    React.createElement("p", null, "recipe 4"))),
            React.createElement("div", { className: "item" },
                React.createElement("div", { className: 'itemImg' },
                    React.createElement("img", { src: _5_jpg_1["default"], alt: "" })),
                React.createElement("div", { className: 'title' },
                    React.createElement("p", null, "recipe 5")))),
        React.createElement("div", { className: "add" },
            React.createElement("img", { src: add_png_1["default"], alt: "" }))));
}
exports["default"] = Recipes;
