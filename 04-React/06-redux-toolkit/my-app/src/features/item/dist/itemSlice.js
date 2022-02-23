"use strict";
exports.__esModule = true;
exports.selectText = exports.selectImage = exports.update = exports.itemReducer = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    img: '',
    text: 'text'
};
exports.itemReducer = toolkit_1.createSlice({
    name: 'item',
    initialState: initialState,
    reducers: {
        update: function (state, action) {
            state.text = action.payload;
            state.img = action.payload;
        }
    }
});
exports.update = exports.itemReducer.actions.update;
exports.selectImage = function (state) { return state.item.img; };
exports.selectText = function (state) { return state.item.text; };
exports["default"] = exports.itemReducer.reducer;
