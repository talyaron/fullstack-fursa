"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./TA.scss");
function Ta() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("article", { className: "box weather" },
            react_1["default"].createElement("div", { className: "icon bubble black" },
                react_1["default"].createElement("div", { className: "spin" },
                    react_1["default"].createElement("img", { src: "https://dl.dropbox.com/s/0qq5anxliaopt8d/sun.png" }))),
            react_1["default"].createElement("h1", null, "Monday"),
            react_1["default"].createElement("span", { className: "temp" }, "23\u00B0"),
            react_1["default"].createElement("span", { className: "high-low" }, "15\u00B0/ 28\u00B0"))));
}
;
exports["default"] = Ta;
