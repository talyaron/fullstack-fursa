"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../components/Nearevents_card.scss");
var tent_jpg_1 = require("../Images/tent.jpg");
var Rola_jpeg_1 = require("../Images/Rola.jpeg");
var ai_1 = require("react-icons/ai");
function Nearevents_card(prop) {
    var src = prop.src, src1 = prop.src1, title1 = prop.title1, title2 = prop.title2, title3 = prop.title3;
    return (react_1["default"].createElement("div", { className: "grid" },
        react_1["default"].createElement("div", { className: "grid__item" },
            react_1["default"].createElement("img", { src: tent_jpg_1["default"], alt: "" }),
            react_1["default"].createElement("div", { className: "grid2" },
                react_1["default"].createElement("h1", null, title1),
                react_1["default"].createElement("h2", null, title2),
                react_1["default"].createElement("h3", null, title3),
                react_1["default"].createElement("div", { className: "parent" },
                    react_1["default"].createElement("img", { className: "img2", src: Rola_jpeg_1["default"], alt: "" }),
                    react_1["default"].createElement("div", { className: "flex justify-between" },
                        react_1["default"].createElement("div", { className: "flex space-x-4" },
                            react_1["default"].createElement(ai_1.AiOutlineHeart, { className: "btn" }),
                            react_1["default"].createElement(ai_1.AiOutlineMessage, { className: "btn" }))))))));
}
exports["default"] = Nearevents_card;
