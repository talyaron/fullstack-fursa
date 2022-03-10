"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./index.scss");
function Index(prop) {
    var title = prop.title, body = prop.body;
    return (react_1["default"].createElement("div", { className: "maindiv" },
        react_1["default"].createElement("h5", null, title),
        react_1["default"].createElement("h5", null, body)));
}
exports["default"] = Index;
