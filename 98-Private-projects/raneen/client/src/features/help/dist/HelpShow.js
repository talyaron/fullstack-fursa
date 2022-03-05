"use strict";
exports.__esModule = true;
var hooks_1 = require("../../app/hooks");
var helpSlice_1 = require("../../app/reducers/helpSlice");
function HelpShow() {
    var help = hooks_1.useAppSelector(helpSlice_1.selectHelp);
    //  const status = useAppSelector(selectTextStauts);
    return (React.createElement("div", { className: "outputBox" },
        React.createElement("h3", null, help)));
}
exports["default"] = HelpShow;
