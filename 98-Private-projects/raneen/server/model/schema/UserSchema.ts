import productSchema from "./productSchema"
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  //id: String,
  name: String,
  password: String,
  email: String,
 

  // city: String,
  
  
  // email: String,
  // phone: String,
});
const Users = mongoose.model("Users", UserSchema);
  export default Users