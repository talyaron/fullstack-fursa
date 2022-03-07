"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    //id: String,
    name: String,
    password: String,
    city: String
});
var Users = mongoose.model("Users", UserSchema);
exports["default"] = Users;
