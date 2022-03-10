"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./London.scss");
function London(props) {
    var _a = react_1.useState(props.LondonTemp), LondonTemp = _a[0], setLondonTemp = _a[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "weather-wrapper" },
            react_1["default"].createElement("div", { className: "weather-card london" },
                react_1["default"].createElement("div", { className: "weather-icon cloud" }),
                react_1["default"].createElement("h1", null, "14\u00BA"),
                react_1["default"].createElement("p", null, "London")))));
}
exports["default"] = London;
