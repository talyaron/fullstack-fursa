"use strict";
exports.__esModule = true;
var hooks_1 = require("../../app/hooks");
var itemSlice_1 = require("./itemSlice");
function itemShow() {
    var text = hooks_1.useAppSelector(itemSlice_1.selectText);
}
exports["default"] = itemShow;
