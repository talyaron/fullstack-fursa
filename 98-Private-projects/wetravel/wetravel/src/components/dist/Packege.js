"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../components/Packege.scss");
function Packege(prop) {
    var city = prop.city, description = prop.description, oldprice = prop.oldprice, img = prop.img;
    return (react_1["default"].createElement("div", { className: "box" },
        react_1["default"].createElement("img", { src: prop.img, alt: "" }),
        react_1["default"].createElement("div", { className: "content" },
            react_1["default"].createElement("h3", null,
                " ",
                react_1["default"].createElement("i", { className: "fas fa-map-marker-alt" }),
                " ",
                prop.city,
                " "),
            react_1["default"].createElement("p", null,
                " ",
                prop.description),
            react_1["default"].createElement("div", { className: "stars" },
                react_1["default"].createElement("i", { className: "fas fa-star" }),
                react_1["default"].createElement("i", { className: "fas fa-star" }),
                react_1["default"].createElement("i", { className: "fas fa-star" }),
                react_1["default"].createElement("i", { className: "fas fa-star" }),
                react_1["default"].createElement("i", { className: "far fa-star" })),
            react_1["default"].createElement("div", { className: "price" },
                " ",
                prop.oldprice,
                " ",
                react_1["default"].createElement("span", null, prop.newprice),
                " "),
            react_1["default"].createElement("a", { href: "#", className: "btn" }, "book now"))));
}
exports["default"] = Packege;
