"use strict";
exports.__esModule = true;
var hooks_1 = require("../../app/hooks");
var textSlice_1 = require("./textSlice");
function TextShow() {
    var text = hooks_1.useAppSelector(textSlice_1.selectText);
    //const status = useAppSelector(selectTextStauts);
    var img = hooks_1.useAppSelector(textSlice_1.selectImg);
    return (React.createElement("div", { className: "text2" },
        React.createElement("img", { src: img, alt: "" }),
        React.createElement("h3", null, text)));
}
exports["default"] = TextShow;
