const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    name: String,
    cost:Number,
    participants:Number,
    hours:Number,
    lessons:Number,
  });

//the collection
const Courses = mongoose.model("Courses", CourseSchema);

export default Courses;
