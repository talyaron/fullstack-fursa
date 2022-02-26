"use strict";
exports.__esModule = true;
//import "../components/Nearevents.scss";
var Bottombar_1 = require("./Bottombar");
var Rola_jpeg_1 = require("../Images/Rola.jpeg");
var tent_jpg_1 = require("../Images/tent.jpg");
var Nearevents_card_1 = require("./Nearevents_card");
var event = [{ src: { tent: tent_jpg_1["default"] }, title1: "Bonfire Night", title2: "16", title3: "December 2019", src1: { Rola: Rola_jpeg_1["default"] } }, { src: { tent: tent_jpg_1["default"] }, title1: "Bonfire Night", title2: "16", title3: "December 2019", src1: { Rola: Rola_jpeg_1["default"] } }, { src: { tent: tent_jpg_1["default"] }, title1: "Bonfire Night", title2: "16", title3: "December 2019", src1: { Rola: Rola_jpeg_1["default"] } }];
function Nearevents() {
    var name = { name: "events" };
    return (React.createElement("div", { style: { backgroundColor: "#F0F0F0" } },
        React.createElement("div", { className: "grid" },
            React.createElement("div", { className: "list" }, event.map(function (even, index) {
                return (React.createElement(Nearevents_card_1["default"], { key: index, title1: even.title1, src: even.src, title2: even.title2, title3: even.title3, src1: even.src1 }));
            }))),
        React.createElement(Bottombar_1["default"], { name: name.name })));
}
exports["default"] = Nearevents;
