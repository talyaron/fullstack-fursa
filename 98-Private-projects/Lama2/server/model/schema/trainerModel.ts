const mongoose = require("mongoose");

const TrainerSchema = new mongoose.Schema({
    name: String,
    level:Number,
    age:Number,
    description:String,
  });

//the collection
const Trainer = mongoose.model("Trainer", TrainerSchema);

export default Trainer;
