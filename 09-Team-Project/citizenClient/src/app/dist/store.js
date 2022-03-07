"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var userReducer_1 = require("./reducer/userReducer");
exports.store = toolkit_1.configureStore({
    reducer: {
        user: userReducer_1["default"]
    }
});
