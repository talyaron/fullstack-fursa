const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  //id: String,
  name: String,
  password: String,
 
    city: String,
  
  
  // email: String,
  // phone: String,
});
const User = mongoose.model("User", userSchema);
  export default User