"use strict";
exports.__esModule = true;
exports.selectAppointment = exports.addAppointment = exports.registrationSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var data_1 = require("./data");
var initialState = {
    registrations: data_1.CourseRegistData
};
exports.registrationSlice = toolkit_1.createSlice({
    name: 'selectedDate',
    initialState: initialState,
    reducers: {
        addAppointment: function (state, action) {
            state.registrations.push(action.payload);
        }
    }
});
exports["default"] = exports.registrationSlice.reducer;
exports.addAppointment = exports.registrationSlice.actions.addAppointment;
exports.selectAppointment = function (state) { return state.registrations.registrations; };
//state.registrations.registrations;
