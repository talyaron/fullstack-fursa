"use strict";
exports.__esModule = true;
var hooks_1 = require("../../../app/hooks");
var treatmentSlice_1 = require("../../../features/treatment/treatmentSlice");
require("./pic.scss");
function PicShow() {
    var pic = hooks_1.useAppSelector(treatmentSlice_1.selectPic);
    return (React.createElement("div", { className: "outputBox" },
        React.createElement("img", { src: pic })));
}
exports["default"] = PicShow;
