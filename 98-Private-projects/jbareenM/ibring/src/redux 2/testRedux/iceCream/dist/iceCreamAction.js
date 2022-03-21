"use strict";
exports.__esModule = true;
exports.buyIceCream = void 0;
var iceCreamTypes_1 = require("./iceCreamTypes");
function buyIceCream() {
    var action = {
        type: iceCreamTypes_1.BUY_ICE_CREAM
    };
    return action;
}
exports.buyIceCream = buyIceCream;
