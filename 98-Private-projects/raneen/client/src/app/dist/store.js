"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var counterSlice_1 = require("./reducers/counterSlice");
var textSlice_1 = require("./reducers/textSlice");
var bagSlice_1 = require("./reducers/bagSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        counter: counterSlice_1["default"],
        text: textSlice_1["default"],
        bag: bagSlice_1["default"]
    }
});
