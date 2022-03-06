"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var CourseSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    participants: Number,
    hours: Number,
    lessons: Number
});
var Courses = mongoose.model("Courses", CourseSchema);
exports["default"] = Courses;
