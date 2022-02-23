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
var UserTypes_1 = require("./UserTypes");
var initialState = {
    loading: false,
    users: [],
    error: ""
};
function userReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UserTypes_1.FETCH_USER_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case UserTypes_1.FETCH_USER_SUCCESS:
            return __assign(__assign({}, state), { loading: false, users: action.payload, error: "" });
        case UserTypes_1.FETCH_USER_FAILURE:
            return __assign(__assign({}, state), { loading: false, users: [], error: action.payload });
        default: return state;
    }
}
exports["default"] = userReducer;
