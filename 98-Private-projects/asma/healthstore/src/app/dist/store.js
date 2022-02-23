"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var treatmentSlice_1 = require("../features/treatment/treatmentSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        treatment: treatmentSlice_1["default"]
    }
});
