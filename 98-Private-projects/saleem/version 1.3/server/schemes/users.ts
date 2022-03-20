const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:String,
        password:String,
        email:String,
        Phonenumber:String,
        Birthday:String,
        site:String,
        subject:String
  });

  //the collection
  const USERS = mongoose.model("users", userSchema);

  export default USERS