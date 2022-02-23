"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var counterSlice_1 = require("../features/counter/counterSlice");
var itemSlice_1 = require("../features/item/itemSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        counter: counterSlice_1["default"],
        item: itemSlice_1["default"]
    }
});
