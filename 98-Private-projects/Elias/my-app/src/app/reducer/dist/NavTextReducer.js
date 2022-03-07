"use strict";
exports.__esModule = true;
exports.ChangeNav = exports.changeNavText = exports.NavtextSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    Header: "",
    status: 'idle'
};
exports.NavtextSlice = toolkit_1.createSlice({
    name: 'NavText',
    initialState: initialState,
    reducers: {
        changeNavText: function (state, action) {
            state.Header = action.payload;
        }
    }
});
exports.changeNavText = exports.NavtextSlice.actions.changeNavText;
exports.ChangeNav = function (state) { return state.NavText; };
exports["default"] = exports.NavtextSlice.reducer;
