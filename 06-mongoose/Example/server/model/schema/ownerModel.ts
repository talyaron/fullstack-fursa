const mongoose = require("mongoose");

export const OwnerSchema = new mongoose.Schema({
  name: String,
  id: String,
  city:String,
});

//the collection
const Owners = mongoose.model("Owners", OwnerSchema);

export default Owners;
