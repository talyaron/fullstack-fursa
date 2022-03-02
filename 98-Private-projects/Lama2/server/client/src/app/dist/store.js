"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var counterSlice_1 = require("../features/counter/counterSlice");
//import treatmentReducer from '../features/treatment/treatmentSlice';
var registrationSlice_1 = require("../features/coursesRegistrations/registrationSlice");
var products_1 = require("../features/productsReducer/products");
var trainer_1 = require("../features/trainersReducer/trainer");
var offers_1 = require("../features/offersReducer/offers");
exports.store = toolkit_1.configureStore({
    reducer: {
        registrations: registrationSlice_1["default"],
        counter: counterSlice_1["default"],
        products: products_1["default"],
        offers: offers_1.offersReducer,
        trainers: trainer_1.TrainersReducer
    }
});
