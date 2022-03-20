const mongoose = require("mongoose");
import { OwnerSchema } from "./ownerModel";

const kittySchema = new mongoose.Schema({
  name: String,

  city: String,

  lifes: Number,
  extraLife: Boolean,
  owner: OwnerSchema,
});

//the collection
const Cats = mongoose.model("Kitten", kittySchema);

export default Cats;
