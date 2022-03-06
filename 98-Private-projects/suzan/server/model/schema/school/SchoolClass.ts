const mongoose = require("mongoose");

const SchoolClassSchema = new mongoose.Schema({
    name:String,
    teacher: String,
  });
  
const SchoolClass = mongoose.model("schoolClasses", SchoolClassSchema);

export default SchoolClass;