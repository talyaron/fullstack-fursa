"use strict";
exports.__esModule = true;
var userModel_1 = require("./userModel");
var mediaSchema_1 = require("./mediaSchema");
var orgModel_1 = require("./orgModel");
var mongoose = require("mongoose");
var accidentSchema = new mongoose.Schema({
    type: String,
    emergency: Boolean || null,
    date: String,
    address: Location,
    media: [mediaSchema_1["default"]],
    call: Object,
    description: String,
    user: userModel_1.UserSchema,
    org: orgModel_1.OrgSchema
});
var accident = mongoose.model("accident", accidentSchema);
exports["default"] = accidentSchema;
