"use strict";
exports.__esModule = true;
exports.selectImg = exports.selectText = exports.update = exports.textReducer = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    text: 'initial state',
    img: ''
};
exports.textReducer = toolkit_1.createSlice({
    name: 'text2',
    initialState: initialState,
    reducers: {
        update: function (state, action) {
            state.text = action.payload[0];
            state.img = action.payload[1];
        }
    }
});
exports.update = exports.textReducer.actions.update;
exports.selectText = function (state) { return state.text2.text; };
//export const selectTextStauts = (state:RootState) => state.text.status;
exports.selectImg = function (state) { return state.text2.img; };
exports["default"] = exports.textReducer.reducer;
