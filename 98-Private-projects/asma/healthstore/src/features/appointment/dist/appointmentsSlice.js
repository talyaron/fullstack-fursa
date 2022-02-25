"use strict";
exports.__esModule = true;
exports.selectAppointment = exports.addAppointment = exports.appointmentsSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var data_1 = require("./data");
var initialState = {
    appointments: data_1.AppointmentData
};
exports.appointmentsSlice = toolkit_1.createSlice({
    name: 'selectedAppointmen',
    initialState: initialState,
    reducers: {
        addAppointment: function (state, action) {
            state.appointments.push(action.payload);
        }
    }
});
exports["default"] = exports.appointmentsSlice.reducer;
exports.addAppointment = exports.appointmentsSlice.actions.addAppointment;
exports.selectAppointment = function (state) { return state.appointments.appointments; };
