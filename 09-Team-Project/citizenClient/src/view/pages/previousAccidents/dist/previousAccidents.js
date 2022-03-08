"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var axios_1 = require("axios");
function previousAccident() {
    var _a = react_2.useState(""), accident = _a[0], setAccident = _a[1];
    react_2.useEffect(function () {
        axios_1["default"].get("/get-previous-accidents").then(function (_a) {
            var data = _a.data;
            console.log(data);
            //   setKitties(data);
        });
    }, []);
    return (react_1["default"].createElement("div", null));
}
exports["default"] = previousAccident;
