"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    FName: String,
    Lname: String,
    UserName: String,
    Password: String,
    Email: String,
    id: String
});
//the collection
var Users = mongoose.model("User", UserSchema);
exports["default"] = Users;
