const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String,
     password: String,
     profession: String,
     id: Number,
  });

  //the collection
  const USERS = mongoose.model("users", userSchema);

  export default USERS