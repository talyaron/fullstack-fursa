"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var UserReducer_1 = require("./reducer/UserReducer");
exports.store = toolkit_1.configureStore({
    reducer: {
        User: UserReducer_1["default"]
    }
});
