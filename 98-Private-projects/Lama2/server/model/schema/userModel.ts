const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber:Number,
    // age:Number,
  });

//the collection
const User = mongoose.model("User", UserSchema);

export default User;
