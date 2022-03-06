"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var OwnerSchema = new mongoose.Schema({
    name: String,
    id: String
});
//the collection
var Owners = mongoose.model("Owners", OwnerSchema);
exports["default"] = Owners;
