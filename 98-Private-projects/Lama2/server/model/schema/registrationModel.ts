const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
    course: String,
    name:String,
    age:Number,
    level:String,
    date:Date,
  });

//the collection
const Registrations = mongoose.model("Registrations", RegistrationSchema);

export default Registrations;
