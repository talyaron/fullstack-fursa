"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: Number
});
//the collection
var User = mongoose.model("User", UserSchema);
exports["default"] = User;
