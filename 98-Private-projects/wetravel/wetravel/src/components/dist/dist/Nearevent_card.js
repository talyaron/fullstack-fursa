"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Nearevent_card(prop) {
    var id = prop.id, src = prop.src, src1 = prop.src1, src2 = prop.src2, src3 = prop.src3, title1 = prop.title1, title2 = prop.title2, title3 = prop.title3;
    return (react_1["default"].createElement("div", { className: "card" },
        react_1["default"].createElement("img", { src: src, alt: "" }),
        react_1["default"].createElement("h1", null, title1),
        react_1["default"].createElement("h2", null, title2),
        react_1["default"].createElement("h3", null, title3),
        react_1["default"].createElement("img", { src: src1, alt: "" }),
        react_1["default"].createElement("img", { src: src2, alt: "" }),
        react_1["default"].createElement("img", { src: src3, alt: "" })));
}
exports["default"] = Nearevent_card;
