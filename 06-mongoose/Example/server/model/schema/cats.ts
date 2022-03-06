const mongoose = require("mongoose");


const kittySchema = new mongoose.Schema({
    name: String,
    address: {
      city: String,
    },
    lifes: Number,
    extraLife: Boolean,
  });

  //the collection
  const Cats = mongoose.model("Kitten", kittySchema);

  export default Cats
  