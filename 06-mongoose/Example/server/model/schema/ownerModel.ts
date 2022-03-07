const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
  name: String,
  id: String,
});

//the collection
const Owners = mongoose.model("Owners", OwnerSchema);

export default Owners;
