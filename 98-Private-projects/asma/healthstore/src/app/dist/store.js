"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var treatmentSlice_1 = require("../features/treatment/treatmentSlice");
var appointmentsSlice_1 = require("../features/appointment/appointmentsSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        treatment: treatmentSlice_1["default"],
        appointments: appointmentsSlice_1["default"]
    }
});
