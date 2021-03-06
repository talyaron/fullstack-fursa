"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var iceCreamTypes_1 = require("./iceCreamTypes");
var initialState = {
    numOfIceCream: 20
};
function iceCreamReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case iceCreamTypes_1.BUY_ICE_CREAM:
            return __assign(__assign({}, state), { numOfIceCream: state.numOfIceCream - 1 });
        default: return state;
    }
}
exports["default"] = iceCreamReducer;
