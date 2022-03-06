"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var counterSlice_1 = require("../features/counter/counterSlice");
//import treatmentReducer from '../features/treatment/treatmentSlice';
var registrationSlice_1 = require("../features/coursesRegistrations/registrationSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        registrations: registrationSlice_1["default"],
        counter: counterSlice_1["default"]
    }
});
