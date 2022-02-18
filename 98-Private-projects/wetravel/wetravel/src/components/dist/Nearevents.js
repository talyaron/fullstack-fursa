"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../components/Nearevents.scss");
var Bottombar_1 = require("./Bottombar");
var Header_1 = require("./Header");
var Rola_jpeg_1 = require("../Images/Rola.jpeg");
var tent_jpg_1 = require("../Images/tent.jpg");
function Nearevents() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("div", { className: "grid" },
            react_1["default"].createElement("div", { className: "grid__item" },
                react_1["default"].createElement("img", { src: tent_jpg_1["default"] }),
                react_1["default"].createElement("div", { className: "grid2" },
                    react_1["default"].createElement("h1", null, "Bonfire Night"),
                    react_1["default"].createElement("h2", null, "16"),
                    react_1["default"].createElement("h3", null, "December 2019"),
                    react_1["default"].createElement("img", { src: Rola_jpeg_1["default"] }))),
            react_1["default"].createElement("div", { className: "grid__item" },
                react_1["default"].createElement("img", { src: tent_jpg_1["default"] }),
                react_1["default"].createElement("div", { className: "grid2" },
                    react_1["default"].createElement("h1", null, "Bonfire Night"),
                    react_1["default"].createElement("h2", null, "19"),
                    react_1["default"].createElement("h3", null, "December 2019"),
                    react_1["default"].createElement("img", { src: Rola_jpeg_1["default"] }))),
            react_1["default"].createElement("div", { className: "grid__item" },
                react_1["default"].createElement("img", { src: tent_jpg_1["default"] }),
                react_1["default"].createElement("div", { className: "grid2" },
                    react_1["default"].createElement("h1", null, "Bonfire Night"),
                    react_1["default"].createElement("h2", null, "18"),
                    react_1["default"].createElement("h3", null, "December 2019"),
                    react_1["default"].createElement("img", { src: Rola_jpeg_1["default"] }))),
            react_1["default"].createElement("div", { className: "grid__item" },
                react_1["default"].createElement("img", { src: tent_jpg_1["default"] }),
                react_1["default"].createElement("div", { className: "grid2" },
                    react_1["default"].createElement("h1", null, "Bonfire Night"),
                    react_1["default"].createElement("h2", null, "17"),
                    react_1["default"].createElement("h3", null, "December 2019"),
                    react_1["default"].createElement("img", { src: Rola_jpeg_1["default"] })))),
        react_1["default"].createElement(Bottombar_1["default"], null)));
}
exports["default"] = Nearevents;
