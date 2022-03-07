"use strict";
var _a;
exports.__esModule = true;
exports.selectPic = exports.selectTreatment = exports.select = exports.update = exports.treatmentSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    treatment: 'Add Treatment...',
    pic: ''
};
exports.treatmentSlice = toolkit_1.createSlice({
    name: 'treatment',
    initialState: initialState,
    reducers: {
        update: function (state, action) {
            state.treatment = action.payload;
        },
        select: function (state, action) {
            state.pic = action.payload;
        }
    }
});
exports.update = (_a = exports.treatmentSlice.actions, _a.update), exports.select = _a.select;
exports.selectTreatment = function (state) { return state.treatment.treatment; };
exports.selectPic = function (state) { return state.treatment.pic; };
exports["default"] = exports.treatmentSlice.reducer;
